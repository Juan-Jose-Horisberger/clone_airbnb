'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { IconType } from "react-icons"
import qs from "query-string"

interface Props {
    icon: IconType
    label: string
    selected?: boolean
}

const CategoryBox: React.FC<Props> = ({
    icon: Icon,
    label,
    selected,
}) => {
    const router = useRouter()
    const params = useSearchParams() //read the url

    const handleClick = useCallback(() => {
        let currentQuery = {}

        if (params) {   //qs.parse create a object, from the parameters that we take from the url
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = { //when the user clicks on a category it will be added to the url
            ...currentQuery,
            category: label
        }

        if (params?.get('category') === label) { //If the user touches the same category twice
            delete updatedQuery.category
        }

        const url = qs.stringifyUrl({ //we generate url string with the most recent query
            url: '/',
            query: updatedQuery,

        }, { skipNull: true }) //we filter all the empty options in this line

        router.push(url)
    }, [label, params, router])

    return (
        <div
            onClick={handleClick}
            className={`
            flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-500 transition cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        `}>
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}

export default CategoryBox