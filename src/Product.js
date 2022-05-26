import { ListGroup } from 'react-bootstrap';
import './Product.css'    

function Producto(id,imageURL){
    return(
        <ListGroup.Item>Producto:{id} foto:<img id='img{id}' src={imageURL} alt=''></img> </ListGroup.Item>
    );
}
export default Producto