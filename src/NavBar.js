import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css'

function NavBar(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Mi Supermercado
          </Navbar.Brand>
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
          <Nav.Link href="#Almacen">Almacén</Nav.Link>
          <Nav.Link href="#Bebidas">Bebidas</Nav.Link>
        </Container>
      </Navbar>
    )
}

export default NavBar