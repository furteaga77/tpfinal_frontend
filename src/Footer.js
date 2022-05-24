import './Footer.css'

function Footer(){
    return(
        <div className='Footer-content'>
            <span>Creado por </span>
            <table>
                <tr>
                    <td><span>NOMBRE</span></td>
                    <td><span>APELLIDO</span></td>
                    <td> <span>DNI</span></td>
                </tr>
                <tr>
                    <td><span>Facundo</span></td>
                    <td><span>Urteaga</span></td>
                    <td><span>26047202</span></td>
                </tr>
            </table>
            <span>&copy; 2021. Todos los derechos reservados</span>
        </div>
    )
}

export default Footer