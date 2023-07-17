import prisma from "@/app/libs/prismadb"

export default async function getListings() {
    try {
        const listings = await prisma.listing.findMany({
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