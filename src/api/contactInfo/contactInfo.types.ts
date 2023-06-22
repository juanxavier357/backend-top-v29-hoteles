import { contactsInfo as contactsInfoModel, Prisma } from '@prisma/client'

export type contactsInfo = contactsInfoModel

export type contactsInfoType =
    | Prisma.contactsInfoWhereInput
    | Prisma.contactsInfoWhereUniqueInput
    | Prisma.contactsInfoCreateInput
    | Prisma.contactsInfoUpdateInput
    | Prisma.contactsInfoDeleteArgs
