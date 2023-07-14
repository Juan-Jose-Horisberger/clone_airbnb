'use client'

import { useRouter } from 'next/navigation'
import { Listing, Reservation } from '@prisma/client'
import useCountries from '@/app/hooks/useCountries'
import { type SafeUser } from '@/app/types'
import { useCallback, useMemo } from 'react'
import { format } from "date-fns"
import Image from 'next/image'
import HeartButton from '../HeartButton'

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

        return `${format(start, 'PP')} - ${format(end, 'PP')}`
    }, [reservation])

    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className='col-span-1 cursor-pointer group'
        >
            <div className='flex flex-col gap-2 w-full'>
                <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                    <Image
                        fill
                        alt="Listing"
                        src={data.imageSrc}
                        className='
                            object-cover 
                            h-full 
                            w-full 
                            group-hover:scale-110 
                            transition
                        '
                    />
                    <div className='absolute top-3 right-3'>
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard