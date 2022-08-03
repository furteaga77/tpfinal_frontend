import './Product.css'
import { useParams } from "react-router-dom";
import { getProducto } from "./data"

function Producto(){
    let params = useParams();
    let producto = getProducto(parseInt(params.catId, 10),parseInt(params.productoId, 10));
    return(
        <main>
            <h1>Producto{producto.id} foto: </h1>
            <img id={'img'+ producto.id} src={producto.imageURL} alt=''></img>
        </main>
    );
}
export default Producto