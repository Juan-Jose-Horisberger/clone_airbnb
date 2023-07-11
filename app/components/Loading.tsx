'use client'

import Image from "next/image"

const Loading: React.FC = () => {
    return (
        <Image width="45" height="45" alt="Loading" src={'/images/loading.gif'} />
    )
}

export default Loading