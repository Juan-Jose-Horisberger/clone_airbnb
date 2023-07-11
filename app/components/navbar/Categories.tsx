'use client'

import Container from "../Container"
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"
import { categories } from "@/app/constantes"
import { type Category as CategoryType } from "@/app/types"

type Props = {}

const Categories = (props: Props) => {
    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()
    const isMainPage = pathname === '/' //This url with category will only be seen in '/'
    if (!isMainPage) return null

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-auto">
                {categories.map((item: CategoryType) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories