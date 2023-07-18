import useCountries from '@/app/hooks/useCountries'
import { type Category, type SafeUser } from '@/app/types'
import React from 'react'
import Avatar from '../Avatar'
import ListingCategory from './ListingCategory'

interface Props {
    user: SafeUser
    category: Category | undefined
    description: string
    roomCount: number
    guestCount: number
    bathroomCount: number
    locationValue: string
}

const ListingInfo: React.FC<Props> = ({
    user,
    category,
    description,
    roomCount,
    guestCount,
    bathroomCount,
    locationValue
}) => {
    const { getByValue } = useCountries()
    const coordinates = getByValue(locationValue)?.latlng

    return (
        <div className='col-span-4 flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <div className='
                    text-xl
                    font-semibold
                    flex
                    flex-row
                    items-center
                    gap-2
                '>
                    <div>Hosted by {user?.name}</div>
                    <Avatar src={user.image} />
                    <div className='
                        flex
                        flex-row
                        items-center
                        gap-4
                        font-light
                        text-neutral-500
                    '>
                        <div>
                            {guestCount} guests
                        </div>
                        <div>
                            {roomCount} rooms
                        </div>
                        <div>
                            {bathroomCount} bathrooms
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category.label}
                    description={category.description}
                />
            )}
        </div>
    )
}

export default ListingInfo