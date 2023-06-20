import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from './user.service'
import { comparePassword } from "../../auth/utils/bcrypt";

export async function getAllUsersHandler(req: Request, res: Response) {
  const users = await getAllUsers()

  return res.json(users)
}

export async function getUserHandler(req: Request, res: Response) {
  const { id } = req.params

  const user = await getUserById(id)

  if (!user) {
    return res.status(404).json({
      message: 'user not found',
    })
  }

  return res.status(200).json(user)
}

export async function createUserHandler(req: Request, res: Response) {
  const data = req.body;

  try {
    const user = await createUser(data);
    return res.status(201).json(user);
  } catch (error: any) {
    console.log(error);
  }
}


export async function updateUserHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  const user = await updateUser(id, data);
  if (!user) {
    return res.status(404).json({
      message: "user not Found",
    });
  }
  return res.status(202).json(user);
}

export async function deleteUserHandler(req: Request, res: Response) {
  const { id } = req.params

  const user = await getUserById(id)

  if (!user) {
    return res.status(404).json({
      message: 'user not found',
    })
  }

  await deleteUser(id)

  return res.json({ message: 'user deleted' })
}

