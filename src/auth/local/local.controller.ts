import { Request, Response, NextFunction } from "express";

import { getUserByEmail } from "../../api/user/user.service";
import jwt from "jsonwebtoken";
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
    }
    const SECRET = "c0d1g0_s3cr3t0"

    const token = jwt.sign(payload, SECRET)


    return res.json({ token, profile: user })

  } catch (error) {

  }

}
