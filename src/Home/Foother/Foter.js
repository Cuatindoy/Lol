import React from 'react'
import "./foter.css"
import { GrFacebook, GrInstagram,  } from "react-icons/gr";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Foter = () => {
    return (
        <footer>
        <div className='container-footer-all'>
        
        
        
                <div className="container-body">
                  <div className="colum1">
                    <h1>Mas informacion de la compañia</h1>
                    <p> Esta compañía se dedica a promover el bienestar y marcas altamente reconocidas importantes y nacionales con
                      instalaciones innovadoras y modernas, para nuestros clientes que buscan un trato justo con productos
                      de calidad con un marco de honestidad, responsabilidad, respeto y confianza, trasmitida a nuestros
                      clientes y que atreves de los años a logrado colocar una sonrisa a cada amiguito.
                    </p>
                  </div>
        
        
                  <div className="colum2">
                    <h1>Redes Sociales</h1>

                    <div className="row">
                    <label><GrFacebook  className='Face' />Siguenos en Facebook</label>
                    </div>

                    <div className="row">
                     
                      <label> <GrInstagram className='Face'  />    Siguenos en Instagram</label>
                    </div>
                    
                   
                  </div>
        
        
                  <div className="colum3">
                    <h1>Informacion Contactos</h1>
                    <div className="row2">

                      <label> <FaPhoneAlt className="Face" />  +57 316 5799936</label>
                    </div>
                    <div className="row2">
                      
                      <label className='re'> <FaEnvelope className="Face" /> sobreHuella@upsdom.com</label>
                    </div>
                  </div>
        
        
                </div>
        
                </div>
        
                <div className="container-footer">
                  <div className='footer'>
                  <hr />
                  <div className="copyright">
                    Copyright © 2022 <b>Sobre La Huella</b> |  Todos los derechos reservados
                  </div>
                  <div className="information">
                    <a href> Política de privacidad</a>| <a href>Aviso Legal</a>  | <a href> Terminos y condiciones </a>  
                  </div>
                  </div>
                </div>
        
        
              </footer>
    )
}

export default Foter

