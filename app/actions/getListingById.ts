import prisma from "@/app/libs/prismadb"

interface IParams {
    listingId?: string
}

export default async function getListingById(
    params: IParams
) {
    try {
        const { listingId } = params
        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            },
            include: { //we want to load the user so we can the load the profile image and the name of the user who owns this listing 
                user: true
            }
        })

        if (!listing) return null

        return {
            ...listing,
            createdAt: listing.createdAt.toISOString(),
            user: {
                ...listing.user,
                createdAt: listing.user.createdAt.toISOString(),
                updatedAt: listing.user.updatedAt.toISOString(),
                emailVerified:
                    listing.user.emailVerified?.toISOString()
            }
        }
    } catch (error: any) {
        throw new Error(error)
    }
}