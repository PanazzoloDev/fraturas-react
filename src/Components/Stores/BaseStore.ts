import { isEmpty, isFunction } from 'lodash';
import { action, observable } from 'mobx';
import type { Controls, typeControl } from '../../Commons/types';

class BaseStore {
    @observable controls: Controls;
    @observable backupControls: Controls;
    @observable storeMode: 'Create' | 'Update' = 'Create';

    put?: (controls: Controls) => object;
    post?: (controls: Controls) => object;
    get?: (id: number) => object;
    delete?: (id: number) => boolean;

    constructor(
        controls: Controls,
        update?: (controls: Controls) => object,
        create?: (controls: Controls) => object,
        getById?: (id: number) => object,
        deleteById?: (id: number) => boolean
    ) {
        this.controls = controls;
        this.backupControls = controls;
        this.put = update;
        this.post = create;
        this.get = getById;
        this.delete = deleteById;
    }

    @action
    changeFormControl = (controlName: string, control: typeControl) => {
        const oldControl = this.controls[controlName];
        if (!isEmpty(oldControl)) {
            this.controls[controlName] = {
                ...oldControl,
                ...control
            };
        }
    }

    @action
    setStoreMode = (mode: 'Create' | 'Update') => {
        this.storeMode = mode;
    }

    @action
    submit = () => {
        console.log(this);
        let response = null;
        switch (this.storeMode) {
            case 'Create':
                response = isFunction(this.post) ? this.post(this.controls) : () => { };
                break;
            case 'Update':
                response = isFunction(this.put) ? this.put(this.controls) : () => { };
                break;
            default:
                break;
        }
        console.log(response);
    }

    @action
    resetStore = () => {
        this.controls = this.backupControls
    }
}

export default BaseStore;
