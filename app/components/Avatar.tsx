'use client'

import Image from "next/image"

type Props = {}

const Avatar = (props: Props) => {
    return (
        <Image className="rounded-full" width="30" height="30" alt="Avatar" src="/images/placeholder.jpg" />
    )
}

export default Avatar