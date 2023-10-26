import { get } from "lodash"
import { useEffect, useState } from 'react'
import { columnDatagridType, rowActionType, toolbarActionType } from "../../Commons/types"
import { API } from "../../Services/BaseAPI"
import Header from "./Components/Header"
import Row from "./Components/Row"
import SearchInput from "./Components/SearchInput"
import ToolbarAction from "./Components/ToolbarAction"
import {
    DatagridContainer,
    Table,
    ToolbarContainer
} from "./style"

type datagridProps = {
    endpoint: string
    columns: columnDatagridType[]
    toolbarActions?: toolbarActionType[]
    rowActions?: rowActionType[]
}

const Datagrid = (props: datagridProps) => {

    const [datagridData, setDatagridData] = useState([]);
    const { endpoint, columns, toolbarActions, rowActions } = props

    const FetchData = () => {
        API.get(endpoint)
            .then((response) => {
                if (get(response, 'status') === 200) {
                    setDatagridData(get(response, 'data.data.data'))
                }
            })
    }

    useEffect(() => {
        FetchData()
    }, []);

    return (
        <DatagridContainer>
            <ToolbarContainer>
                <div>
                    {toolbarActions.map(act =>
                        <ToolbarAction
                            key={act.key}
                            onClick={act.onClick}
                            icon={() => act.icon()}
                        />
                    )}
                </div>
                <SearchInput
                    onSearch={() => alert('Search')}
                />
            </ToolbarContainer>
            <Table>
                <thead>
                    <Header
                        columns={columns}
                        hasActionColumn={!!rowActions}
                    />
                </thead>
                <tbody>
                    {datagridData.map(object =>
                        <Row
                            key={get(object, 'id')}
                            object={object}
                            columns={columns}
                            rowActions={rowActions}
                        />
                    )}
                </tbody>
            </Table>
        </DatagridContainer>
    )
}

export default Datagrid