import { userType } from "../../../Commons/types";
import BaseDatagridStore from "../../../Components/Stores/BaseDatagridStore";

class DatagridUsersStore extends BaseDatagridStore<userType>{
    constructor() {
        super(
            '/users',
            [
                {
                    Header: "Age",
                    accessor: "age",
                    width: 50,
                    minWidth: 50,
                    align: "right",
                    filter: "equals",
                },
                {
                    Header: "Visits",
                    accessor: "visits",
                    width: 50,
                    minWidth: 50,
                    align: "right",
                    filter: "contains",
                },
                {
                    Header: "Status",
                    accessor: "status",
                    filter: "contains"
                },
                {
                    Header: "Profile Progress",
                    accessor: "progress",
                }

            ]
        );
    }
}

export default DatagridUsersStore