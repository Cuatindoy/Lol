import React from 'react'
import "./Producto.css"
import Foter from './../../Home/Foother/Foter';
import Navbaraapp from "./../../Home/Navbar/Navbaraapp"
import { NavLink } from "react-router-dom";


const Jugue = () => {
    return (
<div>
        <Navbaraapp/>        
      <section id="galeria">
        <div className="pastel">
          <h2 className="subtitulo">¿EN QUE LUGAR PERTENECE TU MEJOR AMIGO?</h2>
          <div className="contenedor-galeria">
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://images8.alphacoders.com/650/thumb-1920-650205.jpg"
                className="img-galeria"
                alt="Hola"
              />
              </NavLink>
            </div>
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://images6.alphacoders.com/118/thumb-1920-1188408.jpg"
                className="img-galeria"
                alt="Hola"
              />
                </NavLink>
            </div>
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://c4.wallpaperflare.com/wallpaper/465/531/703/animales-bota-raton-roedor-wallpaper-preview.jpg"
                className="img-galeria"
                alt="Hola"
              />
              </NavLink>
            </div>
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://p4.wallpaperbetter.com/wallpaper/201/716/43/4k-bird-of-paradise-bird-wallpaper-preview.jpg"
                className="img-galeria"
                alt="Hola"
              />
              </NavLink>
            </div>
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://c4.wallpaperflare.com/wallpaper/152/999/584/animales-mar-peces-tortuga-wallpaper-preview.jpg"
                className="img-galeria"
                alt="Hola"
              />
              </NavLink>
            </div>
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://images7.alphacoders.com/366/thumb-350-366544.jpg"
                className="img-galeria"
                alt="Hola"
              />
              </NavLink>
            </div>
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://images7.alphacoders.com/681/thumb-350-681642.jpg"
                className="img-galeria"
                alt="Hola"
              />
              </NavLink>
            </div>
            <div className="container-img">
            <NavLink exact to="/" >
              <img
                src="https://images7.alphacoders.com/719/thumb-1920-719424.jpg"
                className="img-galeria"
                alt="Hola"
              />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

        <Foter/>


        </div>
    )
}

export default Jugue
