'use client'

import { SafeUser } from '../types'

interface Props {
    listingId: string
    currentUser?: SafeUser | null
}

const HeartButton = (props: Props) => {
    return (
        <div>HeartButton</div>
    )
}

export default HeartButton