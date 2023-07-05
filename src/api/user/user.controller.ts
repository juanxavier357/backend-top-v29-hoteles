import { Request, Response } from 'express';
import {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from './user.service';
import { comparePassword } from '../../auth/utils/bcrypt';
import { sendMailSendgrid } from '../../auth/utils/email';

export async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getUserHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export async function createUserHandler(req: Request, res: Response) {
  try {
    const data = req.body;
    const user = await createUser(data);
    const emailData = {
      from: 'No reply <contacto@agenciawebmovil.com>',
      to: user.email,
      subject: 'Welcome to Hotel Booking MIR Top v29',
      templateId: 'd-44bef8980b734b008dbc6bb4ac92f78f',
      dynamicTemplateData: {
        firstName: user.firstName,
        lastName: user.lastName,
        url: `${process.env.FRONTEND_URL}/verify-account/token/${user.passwordResetToken}`,
      },
    };
    sendMailSendgrid(emailData);

    return res.status(201).json(user);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export async function updateUserHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await updateUser(id, data);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return res.status(202).json(user);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export async function deleteUserHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    await deleteUser(id);

    return res.json(user);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export async function loginHandler(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Email or password do not match' });
    }

    return res.json(user);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
