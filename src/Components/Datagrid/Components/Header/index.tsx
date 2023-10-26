import { columnDatagridType } from "../../../../Commons/types"
import { HeaderCell, TableHeader } from "./style"

type headerProps = {
    columns: columnDatagridType[]
    hasActionColumn: boolean
}

const Header = (props: headerProps) => {
    const { hasActionColumn, columns } = props

    return (
        <TableHeader>
            {columns.map(column =>
                <HeaderCell
                    key={column.accessor}
                    width={column.width}
                >
                    {column.header}
                </HeaderCell>
            )}
            {hasActionColumn ?
                <HeaderCell
                    key={999}
                    width={50}
                >
                    {'Ações'}
                </HeaderCell>
                : null
            }
        </TableHeader>
    )
}

export default Header