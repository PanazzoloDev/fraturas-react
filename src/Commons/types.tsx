interface Controls {
    [key: string]: typeControl;
}

interface responseType {
    statusCode: number;
    messages: string | string[];
    data?: object;
}
type columnDatagridType = {
    header?: string,
    accessor: string,
    width?: number,
    minWidth?: number,
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


export type {
    Controls,
    columnDatagridType,
    responseType,
    typeControl,
    userType
};

