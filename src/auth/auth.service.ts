import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const token = req.headers?.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  const SECRET = "s3cr3t_c0d3_123"
  const decoded = jwt.verify(token, SECRET)

  if (!decoded) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  return next()
}
