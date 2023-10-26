import { observer } from "mobx-react"
import Datagrid from "../../../Components/Datagrid"
import DatagridUsersStore from "../Stores/DatagridUsersStore"
import { Create, Registers, Update } from "../../../Components/Icons"

const DatagridContainer = observer(() => {
    const { columns, endpoint } = DatagridUsersStore

    const toolbarActions= [
        {
            key: 1,
            onClick: () => alert('Registro 1 acionado'),
            icon: () => <Create />
        },
        {
            key: 2,
            onClick: () => alert('Registro 2 acionado'),
            icon: () => <Registers />
        }
    ]

    const rowActions= [
        {
            key: 1,
            onClick: () => alert('Registro 1 acionado'),
            icon: () => <Update />
        },
        {
            key: 2,
            onClick: () => alert('Registro 2 acionado'),
            icon: () => <Registers />
        },
        {
            key: 3,
            onClick: () => alert('Registro  acionado'),
            icon: () => <Registers />
        }
    ]
    
    return (
        <Datagrid
            columns={columns}
            endpoint={endpoint}
            toolbarActions={toolbarActions}
            rowActions={rowActions}
        />
    )
})

export default DatagridContainer