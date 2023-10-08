import { columnDatagridType } from "../../Commons/types"

type DatagridProps = {
    columns: columnDatagridType[],
    data: object[],
    fetchData: () => void
}

const Datagrid = (props: DatagridProps) => {

    return (
        <table>
            <thead>
                <tr>
                    <td>teste</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}

export default Datagrid