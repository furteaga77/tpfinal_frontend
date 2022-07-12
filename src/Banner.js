import './Banner.css';
import React from "react";
import { Carousel, Figure } from 'react-bootstrap';
const Banner = () => {
    return ( 
            <Carousel>
                <Carousel.Item>
                    <Figure>
                        <Figure.Image className="d-block w-50"
                            alt=""
                            src="https://static.cotodigital3.com.ar/sitios/fotos/full/00010600/00010630.jpg?3.0.136g"
                        />
                    </Figure>                    
                </Carousel.Item>
                <Carousel.Item>
                    <Figure>
                        <Figure.Image className="d-block w-50"
                            alt=""
                            src="https://static.cotodigital3.com.ar/sitios/fotos/full/00118300/00118371.jpg?3.0.136g"
                        />
                    </Figure>
                </Carousel.Item>
                <Carousel.Item>
                    <Figure>
                        <Figure.Image className="d-block w-50"
                            alt=""
                            src="https://static.cotodigital3.com.ar/sitios/fotos/full/00498800/00498800.jpg?3.0.136g"
                        />
                    </Figure>
                </Carousel.Item>
                <Carousel.Item>
                    <Figure>
                        <Figure.Image className="d-block w-50"
                            alt=""
                            src="https://static.cotodigital3.com.ar/sitios/fotos/full/00510600/00510627.jpg?3.0.136g"
                        />
                    </Figure>                    
                </Carousel.Item>                
            </Carousel>
    );
};
export default Banner;