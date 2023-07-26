import prisma from "@/app/libs/prismadb"

export interface IListingsParams {
    userId?: string
    guestCount?: number
    roomCount?: number
    bathroomCount?: number
    startDate?: string
    endDate?: string
    locationValue?: string
    category?: string
}

export default async function getListings(
    params: IListingsParams
) {
    try {
        const {
            userId,
            guestCount,
            roomCount,
            bathroomCount,
            startDate,
            endDate,
            locationValue,
            category
        } = params

        let query: any = {}

        if (userId) {
            query.userId = userId
        }

        if (category) {
            query.category = category
        }

        if (roomCount) {
            query.roomCount = {
                gte: +roomCount //arrives from the url as a string, we change the typo to number
            }
        }

        if (guestCount) {
            query.guestCount = {
                gte: +guestCount
            }
        }

        if (bathroomCount) {
            query.bathroomCount = {
                gte: +bathroomCount
            }
        }

        if (locationValue) {
            query.locationValue = locationValue
        }

        /*basically what we do here is we use these two combinations to ensure that we filter out all kinds of conflicts in reservations so uh if there is a single day in the reservation date range we are going to filter out that listing because that cannot create a full booking on that.*/
        if (startDate && endDate) {
            //we're going to write query.NOT so are goint to use reserve filtering on this so we're goint to write a filter that actually finds all of this uh listings inside this date range but by using query.not we can reverse that logic
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate }
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate }
                            }
                        ]
                    }
                }
            }
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const safeListings = listings.map((listing) => ({ //we fix warnings, and we modify the data with the function .toISOString()
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeListings
    }
    catch (error: any) {
        throw new Error(error)
    }
}