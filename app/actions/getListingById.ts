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
            createdAt: listing.createdAt.toString(),
            user: {
                ...listing.user,
                createdAt: listing.user.createdAt.toString(),
                updatedAt: listing.user.updatedAt.toString(),
                emailVerified:
                    listing.user.emailVerified?.toString() || null,
            }
        };
    } catch (error: any) {
        throw new Error(error)
    }
}