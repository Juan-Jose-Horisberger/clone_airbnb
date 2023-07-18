import { type SafeUser, type SafeListing } from '@/app/types'
import { Reservation } from '@prisma/client'
import { useMemo } from 'react'

interface Props {
    reservation?: Reservation[]
    listing: SafeListing & {
        user: SafeUser;
    };
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<Props> = ({
    listing,
    currentUser
}) => {
    const category = useMemo(() => {

    }, [])

    return (
        <div>ListingClient</div>
    )
}

export default ListingClient