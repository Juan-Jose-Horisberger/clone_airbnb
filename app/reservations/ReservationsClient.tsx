'use client'

import { Toast } from "react-hot-toast"
import axios from "axios"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"

import Heading from "../components/Heading"
import Container from "../components/Container"
import ListingCard from "../components/listings/ListingCard"

import { type SafeReservations, type SafeUser } from "../types"

interface Props {
    reservations: SafeReservations[]
    currentUser?: SafeUser | null
}

const ReservationsClient: React.FC<Props> = ({
    reservations,
    currentUser
}) => {
    return (
        <Container>
            <Heading
                title="Reservations"
                subtitle="Bookings on your properties"
            />
        </Container>
    )
}

export default ReservationsClient