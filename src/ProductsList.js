import { useEffect, useState } from 'react'
import './ProductsList.css'
import Producto from './Product'
import { Container, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function ProductsList(props){
    // class producto{
    //     constructor(id,imageURL){
    //         this.id = (id)?id:null
    //         this.imageURL = (imageURL)?imageURL:null
    //     }
    // }
    // const productos = [
    //     new producto(1,'https://static.cotodigital3.com.ar/sitios/fotos/full/00010600/00010630.jpg?3.0.136g'),
    //     new producto(2,'https://static.cotodigital3.com.ar/sitios/fotos/full/00118300/00118371.jpg?3.0.136g'),
    //     new producto(3,'https://static.cotodigital3.com.ar/sitios/fotos/full/00498800/00498800.jpg?3.0.136g'),
    //     new producto(4,'https://static.cotodigital3.com.ar/sitios/fotos/full/00510600/00510627.jpg?3.0.136g')
    // ]
    // // eslint-disable-next-line array-callback-return
    // const listproductos = productos.map(element =>{
    //     return(Producto(element.id,element.imageURL))
    // })
    const [productos, setProductos] = useState()
    const {category} = useParams()
    useEffect(function(){
        // eslint-disable-next-line no-unused-expressions
        fetch
        setProductos([])
    },[category])
    
    return(
        <Container>
            <ListGroup>
            <Producto id='1'></Producto>
            <Producto id={props.id}></Producto>
            <Producto id={props.id}></Producto>
            <Producto id={props.id}></Producto>
            </ListGroup>
        </Container>
    )
}
export default ProductsList