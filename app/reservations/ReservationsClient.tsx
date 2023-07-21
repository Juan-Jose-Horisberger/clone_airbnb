'use client'

import { type SafeReservations, type SafeUser } from "../types"

interface Props {
    reservations: SafeReservations[]
    currentUser?: SafeUser | null
}

const ReservationsClient = (props: Props) => {
    return (
        <div>ReservationsClient</div>
    )
}

export default ReservationsClient