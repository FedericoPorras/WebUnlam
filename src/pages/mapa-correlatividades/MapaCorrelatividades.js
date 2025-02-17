import "bootstrap/dist/css/bootstrap.min.css";
import BaseModal from "../../BaseModal";
import CorrReactFlow from "./CorrReactFlow";
import "./MapaCorrelatividades.css";
import { useState } from "react";

function VarianteMapa(props) {
  return (
    <li>
      <li className={props.selected == props.internalName ? "mapSelected" : ""}>
        <button
          onClick={
            !props.link
              ? () => {
                  props.setSelected(props.internalName);
                }
              : () => {}
          }
        >
          {!props.link ? (
            props.name
          ) : (
            <a href={props.href} target="blank">
              {props.name}
            </a>
          )}
        </button>
      </li>
    </li>
  );
}

function renderMap(name) {
  switch (name) {
    case "mapa-simple":
      return <CorrReactFlow />;
    case "mapa-completo-reactflow":
      return <iframe src="https://mapa-correlatividades-unlam.netlify.app/" />;
    case "mapa-completo-medovik":
      return <iframe src="https://leafy-medovik-a06637.netlify.app/" />;
  }
}

function MapaCorrelatividades() {
  const [selected, setSelected] = useState("mapa-simple");
  const [showHelp, setShowHelp] = useState(true);

  return (
    <div style={{ height: "100%" }}>
      <BaseModal
        varShow={showHelp}
        setVarShow={setShowHelp}
        modalType="other"
        title="¿Cómo leer un mapa de correlatividades?"
        innerHTML={
          <div style={{ "text-align": "justify" }}>
            <h5>¿Qué es un mapa de correlatividades?</h5>
            <p>
              Los mapas de correlatividades son diagramas donde figuran las
              materias de las carreras según sus correlatividades. Se leen de
              arriba hacia abajo, o de izquierda a derecha según como este
              organizado. El fin de estos mapas es mostrar de manera más
              sencilla las correlatividades de cada materia, es decir, como se
              va armando el arbol de materias disponibles a cursar según las
              materias que se va aprobando. (Por ejemplo, si se aprueba Análisis
              Matemático I, quedán habilitadas para cursar el próximo
              cuatrimestre Análisis Matemático II y Física I). Las
              correlatividades estan disponibles en la página de la UNLaM, pero
              están en forma de lista, y encontrar las correlatividades se
              vuelve trabajoso incluso cuando pueden parecer poco intuitivas
              (Sin Matemática Discreta no se puede cursar Tópicos de
              Programación, materias que parecerían no tener nada que ver por
              estar una orientada a las matemáticas y la otra a la programación
              están relacionadas por ser una correlativa de la otra). Una última
              aclaración a tener en cuenta es que en los mapas de
              correlatividades figuran solo las materias especificas de las
              carreras, dejando de lado las transversales como Computación o
              Inglés, ya que estas tienen un progreso intuitivo (Ingles 1, 2, 3
              y 4 y Computación 1 y 2, para cursar el número más alto hay que
              aprobar primero el número anterior)
            </p>
            <h5>
              Tipos de Mapas de Correlatividades: Simple, Complejo Completo y
              Medovik
            </h5>
            <p>
              El mapa <b>Simple</b> hace honor a su nombre mostrando las
              correlatividades de forma que ninguna flecha quede tapada por
              otra, pudiendo entenderse todo de un simple golpe de vista y
              orientado a quienes recién comienzan en la carrera. Cada renglon
              es un cuatrimestre y cada dos renglones es un año según lo
              dispuesto en el cronograma oficial de la UNLaM (esto significa que
              las materias del primer renglon corresponden al primer
              cuatrimestre y las del segundo renglon al segundo cuatrimestre, y
              así sucesivamente. Lo mismo ocurre con los años, los primeros dos
              renglones son 1er año, el tercer y cuarto son 2do año, etc.). Si
              con tus estudios no estas pudiendo seguir el diagrama en tiempo y
              forma no te preocupes, es normal, según el programa el ritmo es de
              6 materias por cuatrimestre para recibirse en 5 años (realidad de
              solo unos pocos). Esta variante de mapa, al ser una simplificación
              para quienes estan comenzando, solo cuenta hasta las materias de
              3er año y algunas pocas de 4to. Además, contiene lo denominado
              "Mochilas": Cuando veas bloques que inician con "También", esto
              significa que esa materia También es necesaria, utilizamos esos
              bloques ya que sino algunas flechas taparían el diagrama
              <br></br>
              Por otro lado, el <b>Completo Complejo</b> y el <b>Medovik</b>,
              son mapas más completos y con mayor funcionalidad, pero que si
              recién estas arrancando en la carrera y no estas familiarizado con
              las correlativas pueden resultar más dificiles de entender y usar.
              No estan alineados 100% al cronograma, pero si uno aprende a darse
              cuenta en que difieren son una muy buena herramienta. Estos mapas,
              a diferencia del simple, tienen alcance hasta 5to año.
            </p>
          </div>
        }
      ></BaseModal>
      <div id="GuiaMapas" style={{ height: "12%" }}>
        <h1>Mapas de Correlatividades</h1>
        <div>
          <ul>
            <li>
              <button>
                <a href="/">Volver al inicio</a>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowHelp(true);
                }}
              >
                Ayuda
              </button>
            </li>
            <VarianteMapa
              selected={selected}
              setSelected={setSelected}
              name="Mapa Simple (Hasta 3ro y algunas materias de 4to)"
              internalName="mapa-simple"
            />
            <VarianteMapa
              selected={selected}
              setSelected={setSelected}
              name="Mapa Completo Complejo"
              internalName="mapa-completo-reactflow"
              /*link={true}
              href="https://mapa-correlatividades-unlam.netlify.app/"*/
            />
            <VarianteMapa
              selected={selected}
              setSelected={setSelected}
              name="Mapa Medovik"
              internalName="mapa-completo-medovik"
              /*link={true}
              href="https://leafy-medovik-a06637.netlify.app/"*/
            />
          </ul>
        </div>
      </div>
      <div
        id="MapaContainer"
        style={{
          width: "100%",
          height: "88%",
          border: "solid 3px rgba(4, 255, 0, 0.7)",
          margin: "auto",
        }}
      >
        {renderMap(selected)}
      </div>
    </div>
  );
}

export default MapaCorrelatividades;
