'use client'

import { IconType } from "react-icons"

interface Props {
    icon: IconType
    label: string
    // description: string
    selected?: boolean
}

const CategoryBox: React.FC<Props> = ({
    icon: Icon,
    label,
    selected,
}) => {
    return (
        <div className={`
            flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-500 transition cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        `}>
            <Icon size={26} />
        </div>
    )
}

export default CategoryBox