import './Banner.css';
import React from "react";
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return ( 
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://www.cotodigital3.com.ar/sitios/cdigi/static/content/images/cdigi/ofertas/cartridge/nuevahome/2022-07/images/fructis090722.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                {/* <Carousel.Caption>
                </Carousel.Caption>                 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://www.cotodigital3.com.ar/sitios/cdigi/static/content/images/cdigi/ofertas/cartridge/nuevahome/2022-07/images/aliados110722.jpg"
                        alt="Second slide"
                    />                    
                </Carousel.Item>
                {/* <Carousel.Caption>
                </Carousel.Caption>                 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://www.cotodigital3.com.ar/sitios/cdigi/static/content/images/cdigi/ofertas/cartridge/nuevahome/2022-07/images/forno070722.jpg"
                        alt="Third slide"
                    />                      
                </Carousel.Item>
                {/* <Carousel.Caption>
                </Carousel.Caption>                 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://www.cotodigital3.com.ar/sitios/cdigi/static/content/images/cdigi/ofertas/cartridge/nuevahome/2022-07/images/salta070722.jpg"
                        alt="Fourth slide"
                    />                                          
                </Carousel.Item>   
                {/* <Carousel.Caption>
                </Carousel.Caption>              */}
            </Carousel>
    );
};
export default Banner;