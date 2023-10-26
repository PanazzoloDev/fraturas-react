import { action, observable } from "mobx";
import { columnDatagridType, toolbarActionType } from "../../Commons/types";
import { API } from "../../Services/BaseAPI";

type BaseDatagridStoreProps = {
    endpoint: string,
    columns: columnDatagridType[],
    toolbarActions?: toolbarActionType[]
}

class BaseDatagridStore<T> {
    @observable columns: columnDatagridType[];
    @observable endpoint: string;
    @observable toolbarActions: toolbarActionType[]
    @observable data: T[];

    constructor(props: BaseDatagridStoreProps) {
        this.columns = props.columns;
        this.endpoint = props.endpoint;
        this.toolbarActions = props.toolbarActions;
    }

    @action
    FetchData = () => {
        API.get(this.endpoint)
            .then((response) => this.data = response.data)
    }
}

export default BaseDatagridStore;