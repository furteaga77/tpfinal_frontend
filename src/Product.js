import './Product.css'
import { NavLink, useParams } from "react-router-dom"
import { getProducto } from "./data"


function Producto(){
    let params = useParams();
    let producto = getProducto(parseInt(params.productoId, 10));
    return(
        <main>
            <h1>{producto.name}</h1>
            <img id={'img'+ producto.id} src={producto.imageURL} alt=''></img>
            <h2>${producto.price}</h2>
            <NavLink id="AgregaalCarrito" className="button" to={`/cart`}> Agregar al Carrito </NavLink>                                    
            <br></br> 
            <br></br>      
            <NavLink className="button" to={`/categories/${params.catId}`}> Volver a la lista </NavLink>  
            <br></br> 
            <br></br>                                      
        </main>
    );
}
export default Producto