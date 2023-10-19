import { action, observable } from "mobx";
import { API } from "../../Services/BaseAPI";

class BaseDatagridStore<T> {
    @observable columns: unknown;
    @observable endpoint: string;
    @observable data: T[];

    constructor(
        endpoint: string,
        columns: unknown,
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