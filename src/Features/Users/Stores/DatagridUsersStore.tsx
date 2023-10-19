import { get } from "lodash";
import { userType } from "../../../Commons/types";
import BaseDatagridStore from "../../../Components/Stores/BaseDatagridStore";

class DatagridUsersStore extends BaseDatagridStore<userType>{
    constructor() {
        super(
            '/users',
            [{
                accessorKey: 'firstName',
                header: 'First Name',
            },
            {
                accessorFn: (row: unknown) => get(row, 'firstName'),
                header: () => <span>Last Name</span>,
            }]
        );
    }
}

export default DatagridUsersStore