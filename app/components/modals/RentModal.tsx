'use client'

import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'
import Heading from '../Heading'
import { categories } from '@/app/constantes'
import { type Category as CategoryType } from "@/app/types"
import CategoryInput from '../inputs/CategoryInput'
import { FieldValues, useForm } from 'react-hook-form'
import CountrySelect from '../inputs/CountrySelect'
import dynamic from 'next/dynamic' //module importer dynamically

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal()

    const [step, setStep] = useState(STEPS.CATEGORY)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',
        }
    })

    const category = watch('category')
    const location = watch('location')

    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false
    }), [location])


    const setCustomValue = (id: string, value: any): void => {
        setValue(id, value, {   //this will change my status
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }

    const onBack = (): void => {
        setStep((value) => value - 1)
    }

    const onNext = (): void => {
        setStep((value) => value + 1)
    }

    const actionLabel = useMemo((): string => {
        return step === STEPS.PRICE ? 'Create' : 'Next'
    }, [step])

    const secondaryActionLabel = useMemo((): undefined | string => {
        return step === STEPS.CATEGORY ? undefined : 'Back'
    }, [step])

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading
                title='Which of these best describes your place?'
                subtitle='Pick a category'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
                {categories.map((item: CategoryType) => (
                    <div key={item.label} className='col-span-1'>
                        <CategoryInput
                            onClick={(category) => setCustomValue('category', category)}
                            seleted={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                    title='Where is your place located?'
                    subtitle='Help guests find you!'
                />
                <CountrySelect
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map
                    center={location?.latlng}
                />
            </div>
        )
    }

    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={onNext}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title='Airbnb your home!'
            body={bodyContent}
        />
    )
}

export default RentModal