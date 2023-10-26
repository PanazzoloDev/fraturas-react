import { userType } from "../../../Commons/types";
import BaseDatagridStore from "../../../Components/Stores/BaseDatagridStore";

class DatagridUsersStore extends BaseDatagridStore<userType>{
    constructor() {
        super({
            endpoint: '/users',
            columns: [
                {
                    header: 'Code',
                    accessor: 'id',
                    alignment: 'center',
                    width: 20
                },
                {
                    header: 'Nome',
                    accessor: 'name',
                    alignment: 'left',
                    width: 150
                },
                {
                    header: 'Senha',
                    accessor: 'password',
                    alignment: 'center',
                    width: 250
                },
            ]
        }
        );
    }
}

const store = new DatagridUsersStore();
export default store;