/* eslint-disable react-refresh/only-export-components */
interface Controls {
    [key: string]: typeControl;
}

interface responseType {
    statusCode: number;
    messages: string | string[];
    data?: object;
}

type toolbarActionType = {
    key: number,
    icon: () => JSX.Element | JSX.Element,
    onClick: () => void,
}

type rowActionType = {
    key: number,
    icon: () => JSX.Element | JSX.Element,
    onClick: () => void,
}

type columnDatagridType = {
    header?: string,
    accessor: string,
    width?: number,
    alignment?: "right" | "center" | "left",
    filter?: "equals" | "contains",
}

interface userType {
    id: number;
    name: string;
}

type typeControl = {
    name?: string;
    value: string | number | boolean;
    alias: string;
    label: string;
    onChange?: (controlName: string, control: typeControl) => void;
};

type snackbarProps = {
    open: boolean,
    label?: string,
    type?: 'success' | 'error' | 'warning'
    duration?: number
}


export type {
    Controls,
    rowActionType,
    toolbarActionType,
    columnDatagridType,
    responseType, 
    snackbarProps, 
    typeControl,
    userType
};

