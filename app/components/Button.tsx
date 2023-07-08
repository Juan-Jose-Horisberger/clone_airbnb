import React from 'react'
import { IconType } from 'react-icons/lib'

interface Props {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
}

const Button = (props: Props) => {
    return (
        <button>
            hola
        </button>
    )
}

export default Button