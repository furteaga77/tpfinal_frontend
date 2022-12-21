import { Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import './Footer.css'

function Footer(){
    return(
        <Container>
            <span>Creado por </span>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>DNI</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Facundo</td>
                <td>Urteaga</td>
                <td>26047202</td>
                </tr>
            </tbody>
            </Table>
            <span>&copy; 2022. Todos los derechos reservados</span>
        </Container>
    )
}

export default Footer