import { User } from "@prisma/client";
import { IconType } from 'react-icons/lib'

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & { //we change the type of date
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}

export interface Category {
    label: string
    icon: IconType
    description: string
}
export type ListOfCategory = Category[]