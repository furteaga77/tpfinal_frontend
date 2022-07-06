import './NavBar.css'
import  {Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


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
          {/* <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
          <Nav.Link href="#Almacen">Almacén</Nav.Link>
          <Nav.Link href="#Bebidas">Bebidas</Nav.Link> */}
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/Ofertas">Ofertas</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/catId:2">Almacén</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/catId:3">Bebidas</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/">HOME</Link>          
        </Container>
      </Navbar>
    )
}

export default NavBar