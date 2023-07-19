'use client'

import { Range, RangeKeyDict } from "react-date-range"

interface Props {
    value: Range
    disabledDates?: Date[]
    onChange: (value: RangeKeyDict) => void
}

const Calendar: React.FC<Props> = ({
    value,
    disabledDates,
    onChange
}) => {
    return (
        <div>Calendar</div>
    )
}

export default Calendar