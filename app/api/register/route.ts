import bcrypt from 'bcrypt'
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
) {
    const body = await request.json() //We receive the information of the user who wants to register
    const {
        email,
        name,
        password
    } = body

    const hashedPassword = await bcrypt.hash(password, 12) //hashed password

    const user = await prisma.user.create({ //We create the new user
        data: {
            email,
            name,
            hashedPassword
        }
    })

    return NextResponse.json(user)
}