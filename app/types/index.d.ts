import { Listing, Reservation, User } from "@prisma/client";
import { IconType } from 'react-icons/lib'

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & { //we change the type of date
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string;
};

export type SafeReservations = Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "listing"
> & {
    createdAt: string
    startDate: string
    endDate: string
    listing: SafeListing
}

export interface Category {
    label: string
    icon: IconType
    description: string
}
export type ListOfCategory = Category[]