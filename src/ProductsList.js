import './ProductsList.css'
import { CardGroup, Card } from 'react-bootstrap'
import { getProductos } from "./data";
// import { NavLink, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductsList(){
    let params = useParams();
    let productos = getProductos(parseInt(params.catId, 10));    
    return(
        <CardGroup>
            {productos
                .map((element) => (
                        // <NavLink to={`/categories/${params.catId}/${element.id}`}><Card>Producto:{element.id} foto:<Card.Img variant="top" src={element.imageURL} /> </Card></NavLink>
                        <Card style={{ width: "100px", height: "180px" }}>Producto:{element.id} foto:<Card.Img variant="top" src={element.imageURL} /> </Card>
                    ))}
        </CardGroup>
        )
    }
export default ProductsList