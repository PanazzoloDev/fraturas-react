import { action, observable } from "mobx";
import { API } from "../../Services/BaseAPI";
import { columnDatagridType } from "../../Commons/types";

class BaseDatagridStore<T> {
    @observable columns: columnDatagridType[]
    @observable endpoint: string;
    @observable data: T[];

    constructor(
        endpoint: string,
        columns: columnDatagridType[],
    ) {
        this.columns = columns;
        this.endpoint = endpoint;
    }

    @action
    FetchData = () => {
        API.get(this.endpoint)
            .then((response) => this.data = response.data)
    }
}

export default BaseDatagridStore;