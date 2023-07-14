'use client'

import { useRouter } from 'next/navigation'
import { Listing, Reservation } from '@prisma/client'
import useCountries from '@/app/hooks/useCountries'
import { type SafeUser } from '@/app/types'
import { useCallback, useMemo } from 'react'

interface Props {
    data: Listing
    reservation?: Reservation
    onAction?: (id: string) => void
    disabled?: boolean
    actionLabel?: string
    actionId?: string
    currentUser?: SafeUser | null
}

const ListingCard: React.FC<Props> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {
    const router = useRouter()
    const { getByValue } = useCountries()

    const location = getByValue(data.locationValue)

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()

            if (disabled) return

            onAction?.(actionId)
        }, [onAction, actionId, disabled]
    )

    const price = useMemo((): number => {
        if (reservation) return reservation.totalPrice

        return data.price
    }, [])

    const reservationDate = useMemo(() => {
        if (!reservation) return null

        const start = new Date(reservation.startDate)
        const end = new Date(reservation.endDate)

    }, [])

    return (
        <div>ListingCard</div>
    )
}

export default ListingCard