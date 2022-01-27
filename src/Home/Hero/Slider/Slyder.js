import React from 'react'
import "./Estilos.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slyder() {
    return (
        
                <div>
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images7.alphacoders.com/379/thumb-1920-379691.jpg"
            alt="mobile"
          />
        </div>
        <div className="image">
          <img src="https://fondosmil.com/fondo/22184.jpg " alt="mobile" />
        </div>
        <div className="image">
          <img
            src="https://images5.alphacoders.com/117/thumb-1920-1178194.jpg"
            alt="mobile"
          />
        </div>
      </Carousel>
    </div>
        
    )
}

export default Slyder
