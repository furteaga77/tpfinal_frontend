import './NavBar.css'
import  {Container, Navbar} from 'react-bootstrap'
import { getCategories } from "./data";
import { Link } from 'react-router-dom';


function NavBar(){
  let categories = getCategories();   
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link style={{textDecoration: 'none', color: 'white', marginRight:'5Rem' }} to="/">
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
          {categories.map((element) => (<Link style={{textDecoration: 'none', marginRight:'8Rem' }} to={`/categories/${element.id}`}>{element.nombre}</Link>))}
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/cart"><img alt="" className="imgNavbar" src="logocarrito.jpg"/></Link>          
          <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/">HOME</Link>          
        </Container>
      </Navbar>
    )
}

export default NavBar