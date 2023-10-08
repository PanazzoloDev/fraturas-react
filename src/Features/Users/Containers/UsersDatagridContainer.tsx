import Datagrid from "../../../Components/Datagrid";
import DatagridUsersStore from "../Stores/DatagridUsersStore";

const UserDatagridContainer = () => {
    return (
        <Datagrid
            store={DatagridUsersStore}
        />
    )
}
export default UserDatagridContainer