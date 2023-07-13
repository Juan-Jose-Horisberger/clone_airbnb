'use client'

import { CldUploadWidget } from "next-cloudinary"
import { useCallback } from "react"
import { TbPhotoPlus } from "react-icons/tb"

declare global {
    var cloudinary: any
}

interface Props {
    onChange: (value: string) => void
    value: string
}

const ImageUpload: React.FC<Props> = ({
    onChange,
    value
}) => {

    const handleUpload = useCallback((result: any): void => {
        onChange(result)
    }, [onChange])

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset=""
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => {
                return (
                    <div
                        onClick={() => open?.()} //we make sure there is
                        className="
                            relative 
                            cursor-pointer 
                            hover-opacity-70 
                            transition 
                            border-dashed 
                            border-2 p-20
                            border-neutral-300 
                            flex 
                            flex-col 
                            justify-center 
                            items-center 
                            gap-4 
                            text-neutral-600
                        "
                    >
                        <TbPhotoPlus size={40} />
                        <div className="font-semibold text-lg">
                            Click to upload
                        </div>
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload