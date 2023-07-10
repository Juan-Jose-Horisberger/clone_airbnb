import { getServerSession } from "next-auth/next"

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import prisma from "@/app/libs/prismadb"

export async function getSession() {
    return await getServerSession(authOptions)
}
//Function for find the user logged !

export default async function getCurrentUser() { //comunication with the db
    try {
        const session = await getSession() //in this way we find the session of the logged in user
        if (!session?.user?.email) {
            return null
        }

        const currentUser = await prisma.user.findUnique({ //find the current user
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) { // if we don't find it
            return null
        }

        return currentUser

    } catch (error: any) {
        return null
    }
}