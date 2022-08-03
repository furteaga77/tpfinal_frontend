import './ProductsList.css'
import { Card, Col, Row } from 'react-bootstrap'
import { getProductos } from "./data";
import { NavLink, useParams } from 'react-router-dom';

function ProductsList(){
    let params = useParams();
    let productos = getProductos(parseInt(params.catId, 10));    
    return(
        <Row xs={1} md={2} className="g-4">
            {productos.map((element) => (
                        <Col key={element.id}><NavLink to={`/categories/${params.catId}/${element.id}`}><Card><Card.Img variant="top" src={element.imageURL} /><Card.Body><Card.Title>Producto:{element.id}</Card.Title><Card.Text>Precio Contado $XXX</Card.Text></Card.Body> </Card></NavLink></Col>
                    ))}
        </Row>
        )
    }
export default ProductsList