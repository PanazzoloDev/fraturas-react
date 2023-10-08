import Page from '../../Components/Containers/Page';
import DatagridUsersStore from './Stores/DatagridUsersStore';

const UsersScreen = (): React.ReactNode => {
    return (
        <Page>
            <UsersDatagridContainer
                store={DatagridUsersStore}
            />
        </Page>
    )
}

export default UsersScreen;