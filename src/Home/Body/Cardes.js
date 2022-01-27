import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Estilos.css";

const Cardes = () => {
  return (
    <div>
      <div className="card-container">
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://s1.best-wallpaper.net/wallpaper/m/1705/Dog-reading-book-funny-animals_m.webp"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Blog Leal
            </Card.Title>
            <Card.Text>
              Aquí podrás encontrar curiosidades, vídeos, estilos, envivos, historias, consejos y muchas
              cosas más. Si buscas todo lo relacionado sobre nuestras mascotas,
              estás en el lugar ideal ¡No te quedes sin leer el Blog Leal!.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
                Blog
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://besthqwallpapers.com/Uploads/23-12-2017/34713/thumb2-ragdoll-cat-4k-pets-muzzle-ragdoll-kitten.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Ragdoll
            </Card.Title>
            <Card.Text>
              Este gato de gran tamaño, originario de Estados Unidos, cuenta con
              un carácter muy dócil y amigable, por lo que suele ser una
              excelente compañía para niños y adultos. Es muy tranquilo y se
              adapta con gran facilidad.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
                Leer más
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card  className="cards" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://besthqwallpapers.com/Uploads/20-3-2018/44921/thumb2-black-and-white-rabbit-pets-veterinarian-cute-animals-veterinary-concepts.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Mascota Y Salud
            </Card.Title>
            <Card.Text>
              Sobre la Huella ofrecemos una solución a los posibles problemas y
              necesidades que surjan con nuestras mascotas. Nos encargamos de
              ofrecerte los seguros para animales más completos del mercado.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
                Me interesa
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      


    </div>
  );
};

export default Cardes;
