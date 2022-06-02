import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductsList from './ProductsList';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    //Header
    //Content
    //Footer
    <BrowserRouter>
      <NavBar></NavBar>
      <ProductsList></ProductsList>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
