import React from "react";
import "./Estilos.css";
import 'animate.css';
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from "react-router-dom";

const Dos = () => {
  return (
    <div className="contenedor">
      <section className="banner">
        <div className="banner-content     animate__animated animate__backInLeft">
          <h1> Bienvenido a Sobre La Huella</h1>
          <p>
            Promover el bienestar de los animales a través de la excelencia en
            medicina veterinaria, estándares médicos y servicios sin precedentes
            para nuestros clientes y la comunidad, sin perder nunca de vista las
            necesidades cambiantes de nuestros pacientes y clientes, que son
            miembros de la familia, siempre basándonos en el respeto, la
            honestidad, el afecto, el amor, la calidad y la confianza.
          </p>
          <div className="btnBox">
            <div className="btn">
              <NavLink exact to="/Contactenos" className="readMore">
               
                Contáctanos
              </NavLink>
            </div>
          </div>
        </div>

        <div className="rosel">
          <Carousel className="Carousel">
            <Carousel.Item className="Item">
              <img
                
                src="https://image.freepik.com/foto-gratis/accesorios-mascotas-concepto-naturaleza-muerta-texto-amo-mascotas_23-2148949569.jpg"
                
              />
              
            </Carousel.Item >
            <Carousel.Item  className="Item">
              <img
                
                src="https://image.freepik.com/foto-gratis/arreglo-comida-mascotas-domesticas_23-2148982330.jpg"
                
              />

            </Carousel.Item>
            <Carousel.Item className="Item" >
              <img
                
                src="https://image.freepik.com/foto-gratis/accesorios-mascotas-bodegon-cuenco-comida-collar_23-2148949579.jpg"
                
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Dos;
