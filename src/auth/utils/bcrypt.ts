import crypto from 'crypto'
import bcrypt from 'bcrypt';
//import crypto from 'crypto';
export async function hashPassword(password: string, factor?: number) {
  // 1. salt
  const salt = await bcrypt.genSalt(factor)
  // 2. hash
  return await bcrypt.hash(password, salt)
}

export async function comparePassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export function hashPasswordSync(password: string, factor?: number) {
  // 1. salt
  const salt = bcrypt.genSaltSync(factor)

  // 2. hash
  return bcrypt.hashSync(password, salt)
}

export function createHashToken (data: string) {
  return crypto.createHash('sha256').update(data).digest('hex')
}
