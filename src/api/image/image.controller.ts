import { Request, Response } from "express";

import {
    getAllImage,
    getImageById,
    createImage,
    updateImage,
    deleteImage,
} from './image.service'

export async function getAllImageHandler(req: Request, res: Response) {
    const images = await getAllImage()

    return res.json(images)
}

export async function getImageHandler(req: Request, res: Response) {
    const { id } = req.params

    const image = await getImageById(id)

    if (!image) {
        return res.status(404).json({
            message: 'Image not found',
        })
    }

    return res.status(200).json(image)
}

export async function createImageHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.url) {
        return res.status(400).json({
            error: "Url is missing",
        });
    }

    const image = await createImage(data)

    return res.status(201).json(image)
}

export async function updateImageHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const image = await updateImage(id, data);
    if (!image) {
        return res.status(404).json({
            message: "Image not Found",
        });
    }
    return res.status(202).json(image);
}

export async function deleteImageHandler(req: Request, res: Response) {
    const { id } = req.params

    const image = await getImageById(id)

    if (!image) {
        return res.status(404).json({
            message: 'Image not found',
        })
    }

    await deleteImage(id)

    return res.json({ message: 'Image deleted' })
}
