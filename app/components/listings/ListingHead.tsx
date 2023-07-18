'use client'

import { type SafeUser } from "@/app/types"

interface Props {
    title: string
    locationValue: string
    imageSrc: string
    id: string
    currentUser?: SafeUser | null
}

const ListingHead: React.FC<Props> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser
}) => {
    return (
        <div>ListingHead</div>
    )
}

export default ListingHead