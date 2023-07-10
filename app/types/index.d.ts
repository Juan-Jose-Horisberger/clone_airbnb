import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & { //we change the type of date
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}