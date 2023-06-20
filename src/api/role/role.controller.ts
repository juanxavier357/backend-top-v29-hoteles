import { Request, Response } from "express";
import {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from './role.service'
export async function getAllRolesHandler(req: Request, res: Response) {
  const roles = await getAllRoles()

  return res.json(roles)
}

export async function getRoleHandler(req: Request, res: Response) {
  const { id } = req.params

  const role = await getRoleById(id)

  if (!role) {
    return res.status(404).json({
      message: 'role not found',
    })
  }

  return res.status(200).json(role)
}

export async function createRoleHandler(req: Request, res: Response) {
  const data = req.body;

  try {
    const role = await createRole(data);
    return res.status(201).json(role);
  } catch (error: any) {
    console.log(error);
  }
}


export async function updateRoleHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  const role = await updateRole(id, data);
  if (!role) {
    return res.status(404).json({
      message: "role not Found",
    });
  }
  return res.status(202).json(role);
}

export async function deleteRoleHandler(req: Request, res: Response) {
  const { id } = req.params

  const role = await getRoleById(id)

  if (!role) {
    return res.status(404).json({
      message: 'role not found',
    })
  }

  await deleteRole(id)

  return res.json({ message: 'role deleted' })
}

