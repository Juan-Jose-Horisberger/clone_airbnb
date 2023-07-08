'use cliente' //There is the differential the client components and server component for I don't have problems

// type Props = {}
interface Props {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            {children}
        </div>
    )
}

export default Container