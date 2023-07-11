'use client'

import { useEffect, useState } from "react"
import Loading from "../Loading"
interface Props {
    onClick: () => void
    label: string
    onClickLogout?: boolean
}

const MenuItem: React.FC<Props> = ({ onClick, label, onClickLogout }) => {
    const [disabled, setDisabled] = useState(true)

    return (
        <button
            disabled={(label === 'Logout' && onClickLogout) && disabled}
            onClick={onClick}
            className={`
                px-4 py-3 hover:bg-neutral-100 transition font-semibold text-start  
                ${onClickLogout ? 'bg-neutral-100' : ''}
                ${(onClickLogout && label === 'Logout') && 'py-0'}
            `}>

            {onClickLogout ? (
                <div className="flex justify-center">
                    <Loading />
                </div>
            ) : label}
        </button>
    )
}

export default MenuItem