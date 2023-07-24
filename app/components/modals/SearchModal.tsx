'use client'

import useSearchModal from "@/app/hooks/useSearchModal"
import Modal from "./Modal"

type Props = {}

const SearchModal = (props: Props) => {
    const searchModal = useSearchModal()

    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={searchModal.onOpen}
            title="Filters"
            actionLabel="Search"
        />
    )
}

export default SearchModal