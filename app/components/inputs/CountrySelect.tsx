'use client'

import Select from 'react-select'

export type CountrySelectValue = {
    flag: string
    label: string
    latlng: number[]
    region: string
    value: string
}

interface Props {
    value?: CountrySelectValue
    onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<Props> = ({
    value,
    onChange
}) => {

    return (
        <div>CountrySelect</div>
    )
}

export default CountrySelect