
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

import { uploadImage, maxSize } from './upload.service';

export async function uploadSingleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.file) {
    return res.status(400).json({ message: 'File is required' });
  }

  const { path, size } = req.file as Express.Multer.File;

  if (size > maxSize) {
    fs.unlinkSync(path);
    return res.status(400).json({ message: 'File is too large' });
  }

  try {
    const result = await uploadImage(path);

    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  } finally {
    fs.unlinkSync(path);
  }
}

export async function uploadMultipleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const files = req.files as Express.Multer.File[];

  if (!files?.length) {
    return res.status(400).json({ message: 'Files are required' });
  }

  try {
    const promises = files.map((file) => uploadImage(file.path));

    const results = await Promise.all(promises);

    return res.status(201).json(results);
  } catch (error) {
    return next(error);
  } finally {
    files.forEach((file) => fs.unlinkSync(file.path));
  }
}
