import './NavBar.css'
import  {Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">
              <img
                alt=""
                src="logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Mi Supermercado
            </Link>
          </Navbar.Brand>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/1">Ofertas</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/2">Almacén</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/3">Bebidas</Link>
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/">HOME</Link>          
        </Container>
      </Navbar>
    )
}

export default NavBar