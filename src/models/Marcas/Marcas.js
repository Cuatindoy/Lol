import React from "react";
import "./Veterina.css";
import Foter from './../../Home/Foother/Foter';
import Navbaraapp from "./../../Home/Navbar/Navbaraapp"
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Marcas = () => {
    let navigate = useNavigate();
  return (
    <div>
        <Navbaraapp/>
      {/**Card */}
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://thelogisticsworld.com/wp-content/uploads/2021/04/aguja-sacando-liquido-de-frasco-de-vacuna.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Vacunación de mascotas
            </Card.Title>
            <Card.Text>
              Este servicio que se presta bajo chequeo clínico veterinario
              previo para un ciclo de vacunación completo de la mascota y
              medicación de acuerdo con la patología a tratar.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"    type="submit" onClick={() => {
            navigate("/");
          }}              >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://s1.best-wallpaper.net/wallpaper/m/2106/Laboratory-professionals-doctor-medicine-equipment_m.webp"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Laboratorio clínico veterinario
            </Card.Title>
            <Card.Text>
              Tenemos un amplio portafolio de servicios de análisis médicos en
              laboratorio para tu mascota, garantizando un mejor manejo del
              diagnóstico clínico.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"  type="submit" onClick={() => {
            navigate("/");
          }}   >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.myfarmdelivery.com/wp-content/uploads/2021/01/profilaxis-para-perros-1.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Profilaxis </Card.Title>
            <Card.Text>
              Servicio de salud oral prestado por el médico veterinario como
              prevención y tratamiento de la salud de la mascota. Este servicio
              se desarrolla bajo anestesia con previo examen clínico y
              procesamiento de laboratorio.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}   >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/x/certificado-m%C3%A9dico-negro-para-viajar-con-icono-de-l%C3%ADnea-perro-o-gato-en-fondo-blanco-documento-mascota-pezu%C3%B1a-impresi%C3%B3n-pasta-202759912.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Certificado Médico
            </Card.Title>
            <Card.Text>
              Dicho certificado tiene un tiempo de validez de tres días según
              normatividad. Esta información se registra en el sistema de
              identificación por Microchip, el cual se implanta en la mascota
              para manejo del historial clínico, personal y del propietario.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}    >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/**Card */}
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://st2.depositphotos.com/10376142/47589/v/600/depositphotos_475892210-stock-video-yellow-clipboard-with-medical-clinical.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Imagenología Ayudas diagnósticas
            </Card.Title>
            <Card.Text>
              Servicios ecográficos y radiológicos para un mejor diagnóstico de
              patologías de la mascota.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"     type="submit" onClick={() => {
            navigate("/");
          }}   >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.elcolombiano.com/documents/10157/0/580x387/0c0/580d365/center/11101/KMNO/image_content_35129947_20200207215226.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Nebulizaciones
            </Card.Title>
            <Card.Text>
            Servicios de terapia respiratoria como complemento al tratamiento requerido por la mascota.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"    type="submit" onClick={() => {
            navigate("/");
          }}   >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/videos/cute-red-and-white-corgi-sleeping-in-bed-with-high-fever-temperature-video-id1184919559?b=1&k=20&m=1184919559&s=640x640&h=7ivPqIzmuRXQFhb_DPFYDo81nSOXLWQR5S1BfEAJyTU="
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Consulta Veterinaria </Card.Title>
            <Card.Text>
            Servicio de interconsultas con especialistas dependiendo de la patología a analizar para su posterior tratamiento.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}   >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/photos/doctor-holds-a-small-black-heart-shape-picture-id1143795474?b=1&k=6&m=1143795474&s=170667a&w=0&h=0q3SNvNfshYppK0P35zsXjLMlDwhomRwY9L-trvotdY="
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Consulta veterinaria, Medicina general
            </Card.Title>
            <Card.Text>
            Servicio de consulta médica veterinaria a través de la cual se brinda un chequeo general de la mascota, diagnóstico y pruebas de laboratorio.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}   >
                Me Interesa
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Foter/>
    </div>
  );
};

export default Marcas;
