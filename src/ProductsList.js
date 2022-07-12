import './ProductsList.css'
import { Row } from 'react-bootstrap'
import { getProductos } from "./data";
import { NavLink, useParams } from 'react-router-dom';

function ProductsList(){
    let productos = getProductos();
    let params = useParams();
    return(
        <Row>
                {productos
                    .map((element) => {
                        return(<NavLink to={`/categories/${params.catId}/${element.id}`}><p>Producto:{element.id} foto:<img id={'img'+ element.id} src={element.imageURL} alt=''></img> </p></NavLink>)
                })}
        </Row>
        )
    }
export default ProductsList