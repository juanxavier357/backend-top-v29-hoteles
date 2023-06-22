import { Request } from 'express';
import { users } from '../api/user/user.types';

export type PayloadType = {
  id: string;
  email: string;
  iat?: number;
};

export interface AuthRequest extends Request {
  user?: users;
}
