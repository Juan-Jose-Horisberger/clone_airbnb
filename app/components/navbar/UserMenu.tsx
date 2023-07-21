'use client'
import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'

import Avatar from '../Avatar'
import MenuItem from './MenuItem'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRentModal from '@/app/hooks/useRentModal'


interface Props {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<Props> = ({ currentUser }) => {
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const rentModal = useRentModal()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [onClickLogout, setOnClickLogout] = useState<boolean>(false)

    const toggleOpen = useCallback((): void => {
        setIsOpen((value) => !value)
    }, [])

    const handleOnClick = useCallback((): void => {
        setOnClickLogout(true)
        signOut()
    }, [])

    const onRent = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen()
        }

        // Open Rent Modal

        rentModal.onOpen()
    }, [currentUser, loginModal, rentModal])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb your home
                </div>
                <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12'>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? ( //if the user logged in
                            <>
                                <MenuItem
                                    onClick={() => router.push("/trips")}
                                    label='My trips'
                                />
                                <MenuItem
                                    onClick={() => { }}
                                    label='My favorites'
                                />
                                <MenuItem
                                    onClick={() => { }}
                                    label='My reservations'
                                />
                                <MenuItem
                                    onClick={() => { }}
                                    label='My properties'
                                />
                                <MenuItem
                                    onClick={rentModal.onOpen}
                                    label='Airbnb my home'
                                />
                                <hr />
                                <MenuItem
                                    onClick={handleOnClick}
                                    label='Logout'
                                    onClickLogout={onClickLogout}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label='Login'
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label='Sign up'
                                />
                            </>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserMenu