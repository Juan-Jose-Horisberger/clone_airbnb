import EmptyState from "../components/EmptyState"
import ClientOnly from "../components/ClientOnly"
import getCurrentUser from "../actions/getCurrentUser"

const FavoritesPage = async () => {
    // const currentUser = await getCurrentUser()

    return (
        <ClientOnly>
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorite listings."
            />
        </ClientOnly>
    )
}

export default FavoritesPage