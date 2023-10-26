import { get } from "lodash"
import { columnDatagridType, rowActionType } from "../../../../Commons/types"
import RowAction from "../RowAction"
import { CellContainer, RowContainer } from "./style"

type rowProps = {
    columns: columnDatagridType[]
    rowActions?: rowActionType[]
    object: unknown
}

const Row = (props: rowProps) => {
    const { columns, object, rowActions } = props
    return (
        <RowContainer>
            {columns.map(column =>
                <CellContainer
                    key={get(object, 'id')}
                    aligment={column.alignment}
                >
                    {get(object, column.accessor)}
                </CellContainer>
            )}
            {rowActions ?
                <CellContainer
                    key={999}
                    aligment={'center'}
                >
                    {rowActions.map(action =>
                        <RowAction
                            key={action.key}
                            onClick={action.onClick}
                        >
                            {action.icon()}
                        </RowAction>
                    )}
                </CellContainer>
                : null
            }
        </RowContainer>
    )
}

export default Row