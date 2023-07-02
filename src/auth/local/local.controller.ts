import { Request, Response, NextFunction } from 'express';
import { getUserByEmail, getUserByToken, updateUser } from '../../api/user/user.service';
import { comparePassword } from '../utils/bcrypt';
import { signToken } from '../auth.service';

export async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    //compare
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }

    //jwt
    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = signToken(payload);

    const profile = {
      fullName: `${user.firstName} ${user.lastName}`,
      avatar: user.avatar,
      roles: user.roles.map(({ role }) => ({
        id: role.id,
        name: role.name,
      })),
    };

    return res.json({ token, profile });
  } catch (error) {
    console.log(error);
  }
}

export async function activateHandler(req: Request, res: Response) {
  const { token } = req.params;
  try {
    const user = await getUserByToken(token);

    if (!user) {
      return res.status(404).json({
        message: 'Invalid token',
      });
    }

    if(user.passwordResetExpires) {
      if(Date.now() > user.passwordResetExpires.getTime()) {
        return res.status(400).json({
          message: 'Token expired',
        })
      }
    }

    const data = {
      ...user,
      isActive: true,
      passwordResetToken: null,
      passwordResetExpires: null,
    };

    const updatedUser = await updateUser(user.id, data);

        //jwt
        const payload = {
          id: updatedUser.id,
          email: updatedUser.email,
        };
        const jwtToken = signToken(payload);

        const profile = {
          fullName: `${updatedUser.firstName} ${updatedUser.lastName}`,
          avatar: updatedUser.avatar,
          roles: updatedUser.roles.map(({ role }) => ({
            id: role.id,
            name: role.name,
          })),
        };


    return res.json({token: jwtToken, profile});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

