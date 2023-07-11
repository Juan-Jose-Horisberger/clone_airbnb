'use client'

import Container from "../Container"
import { TbBeach } from "react-icons/tb"
import CategoryBox from "./CategoryBox"

type Props = {}

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
]

const Categories = (props: Props) => {
    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories