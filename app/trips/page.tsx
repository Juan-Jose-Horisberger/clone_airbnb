
import EmptyState from "../components/EmptyState"
import ClientOnly from "../components/ClientOnly"

import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import TripsClient from "./TripsClient"

type Props = {}

const TripsPage = async (props: Props) => {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Unautthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    })

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No trips found"
                    subtitle="Looks like you havent reserved any trips"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage