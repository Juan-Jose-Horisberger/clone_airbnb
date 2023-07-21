'use client'

import { type SafeUser, type safeReservations } from "../types"

interface Props {
    reservations: safeReservations[]
    currentUser: SafeUser | null
}

const TripsClient: React.FC<Props> = ({
    reservations,
    currentUser
}) => {
    return (
        <div>TripsClient</div>
    )
}

export default TripsClient