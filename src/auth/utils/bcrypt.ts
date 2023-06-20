import bcrypt from 'bcrypt';
//import crypto from 'crypto';
export async function hashPassword(password: string, factor?: number) {
  const salt = await bcrypt.genSalt()
  return await bcrypt.hash(password, salt)

}
export async function comparePassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}
