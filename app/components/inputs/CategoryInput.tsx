'use client'

import React from 'react'
import { IconType } from 'react-icons/lib'

interface Props {
    icon: IconType
    label: string
    seleted: boolean
    onClick: (value: string) => void
}

const CategoryInput: React.FC<Props> = ({
    onClick,
    seleted,
    label,
    icon: Icon
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
                rounded-xl border-2 p-4 flex-col gap-3 hover:border-black transition cursor-pointer
                ${seleted ? 'border-black' : 'border-neutral-200'}
            `}
        >
            <Icon size={30} />
            <div className='font-semibold'>
                {label}
            </div>
        </div>
    )
}

export default CategoryInput