import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { getUserByEmail } from "../../api/user/user.service";
import { comparePassword } from "../utils/bcrypt";
export async function loginHandler(req: Request, res: Response) {

  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email)
    if (!user) {
      return res.status(404).json({ message: "user not found" })
    }

    //compare
    const isMatch = await comparePassword(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Incorret email or password" })
    }

    //jwt
    const payload = {
      id: user.id,
      email: user.email
    };
    const SECRET = "s3cr3t_c0d3_123";
    const token = jwt.sign(payload, SECRET)

    const profile = {
      fullName: `${user.firstName} ${user.lastName}`,
      avatar: user.avatar,
      roles: user.roles.map(({ role }) => ({
        id: role.id,
        name: role.name
      }))
    }

    return res.json({ token, profile })

  } catch (error) { }
}
