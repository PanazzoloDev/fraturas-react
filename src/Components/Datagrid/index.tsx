import { get } from "lodash"
import { columnDatagridType } from "../../Commons/types"
import Header from "./Components/Header"
import Row from "./Components/Row"
import { Table } from "./style"

const data = [
    { id: 1, name: 'Wesley Panazzolo', email: 'wesley.panazzolo@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 2, name: 'Carlos Maciel', email: 'carlos.maciel@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 3, name: 'Luiz Gustavo', email: 'luiz.gustavo@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 4, name: 'Robert Gusman', email: 'robert.gusman@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 5, name: 'Daniel Jacob', email: 'daniel.jacob@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 6, name: 'Juan Carlos', email: 'juan.carlos@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 7, name: 'Caleb Maicom', email: 'caleb.maicom@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 8, name: 'Ryan Souza', email: 'ryan.souza@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 9, name: 'Julia Sena', email: 'julia.sena@gmail.com', adress: 'R. Dom Rafael Nro 630' },
    { id: 10, name: 'Carla Prates', email: 'carla.prates@gmail.com', adress: 'R. Dom Rafael Nro 630' }
]

const columns: Array<columnDatagridType> = [
    { header: 'Code', accessor: 'id', alignment: 'center', width: 50 },
    { header: 'Nome', accessor: 'name', alignment: 'left', width: 150 },
    { header: 'Email', accessor: 'email', alignment: 'left', width: 250 },
    { header: 'Endereço', accessor: 'adress', alignment: 'left', width: 500 },
]

const Datagrid = () => {
    const accessors = columns.map(column => column.accessor)
    return (
        <Table>
            <thead>
                <Header columns={columns} />
            </thead>
            <tbody>
                {data.map(object =>
                    <Row
                        key={get(object, 'id')}
                        object={object}
                        accessors={accessors}
                    />
                )}
            </tbody>
        </Table>
    )
}

export default Datagrid