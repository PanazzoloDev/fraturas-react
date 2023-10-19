import { columnDatagridType } from "../../../../Commons/types"
import { HeaderCell, TableHeader } from "./style"

type headerProps = {
    columns: columnDatagridType[]
}

const Header = (props: headerProps) => {
    return (
        <TableHeader>
            {props.columns.map(column =>
                <HeaderCell key={column.accessor}>{column.header}</HeaderCell>
            )}
        </TableHeader>
    )
}

export default Header