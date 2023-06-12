import { Request, Response } from "express";

import {
  getAllAmenities,
  getAmenityById,
  createAmenity,
  updateAmenity,
  deleteAmenity,
} from './amenity.service'

export async function getAllAmenitiesHandler(req: Request, res: Response) {
  const amenities = await getAllAmenities()

  return res.json(amenities)
}

export async function getAmenityHandler(req: Request, res: Response) {
  const { id } = req.params

  const amenity = await getAmenityById(id)

  if (!amenity) {
    return res.status(404).json({
      message: 'amenity not found',
    })
  }

  return res.status(200).json(amenity)
}

export async function createAmenityHandler(req: Request, res: Response) {
  const data = req.body

  if (!data.name || !data.roomsId) {
    return res.status(400).json({
      error: "name or roomId is missing",
    });
  }

  const amenity = await createAmenity(data)

  return res.status(201).json(amenity)
}

export async function updateAmenityHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  const amenity = await updateAmenity(id, data);
  if (!amenity) {
    return res.status(404).json({
      message: "amenity not Found",
    });
  }
  return res.status(202).json(amenity);
}

export async function deleteAmenityHandler(req: Request, res: Response) {
  const { id } = req.params

  const amenity = await getAmenityById(id)

  if (!amenity) {
    return res.status(404).json({
      message: 'amenity not found',
    })
  }

  await deleteAmenity(id)

  return res.json({ message: 'amenity deleted' })
}
