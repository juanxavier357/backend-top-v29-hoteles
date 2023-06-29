import { hashPasswordSync } from "../../auth/utils/bcrypt"
import { roleSeeder } from "../role/role.seeder"

export const userSeeder = [
  {
    id: 'Hotel_User_1',
    firstName: 'Juan',
    lastName: 'Cabello',
    email: 'juancabello@gmail.com',
    phone: '+51 987 654 321',
    password: hashPasswordSync('1357'),
    avatar: 'https://picsum.photos/200',
    isActive: true,
  },
  {
    id: 'Hotel_User_2',
    firstName: 'Michael',
    lastName: 'Gonzales',
    email: 'michaelgonzales@gmail.com',
    phone: '+51 987 456 321',
    password: hashPasswordSync('2468'),
    avatar: 'https://picsum.photos/200',
    isActive: true,
  },
  {
    id: 'Hotel_User_3',
    email: 'xaviersalirrosas@gmail.com',
    firstName: 'Xavier',
    lastName: 'Salirrosas',
    phone: '+51 987 654 123',
    password: hashPasswordSync('3579'),
    avatar: 'https://picsum.photos/200',
    isActive: false,
  },
]

export const userByRoleSeeder = [
  // user 1 --> Juan
  {
    userId: userSeeder[0].id,
    roleId: roleSeeder[0].id,
  },
  {
    userId: userSeeder[0].id,
    roleId: roleSeeder[1].id,
  },
  // user 2 --> Michael
  {
    userId: userSeeder[1].id,
    roleId: roleSeeder[0].id,
  },
  {
    userId: userSeeder[1].id,
    roleId: roleSeeder[1].id,
  },
  // user 3 --> Xavier
  {
    userId: userSeeder[2].id,
    roleId: roleSeeder[1].id,
  },
]
