import './Product.css'    

function Producto(id,imageURL){
    return(
        <li>Producto:{id} foto:<img id='img{id}' src={imageURL} alt=''></img> </li>
    );
}
export default Producto