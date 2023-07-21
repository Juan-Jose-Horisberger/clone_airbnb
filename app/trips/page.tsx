
import EmptyState from "../components/EmptyState"
import ClientOnly from "../components/ClientOnly"

import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"

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

    return (
        <div>TripsPage</div>
    )
}

export default TripsPage