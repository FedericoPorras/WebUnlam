import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LinksPage from "./pages/main/LinksPage";
import CalculadoraDificultades from "./pages/calculadora-dificultades/CalculadoraDificultades";
import InscripcionEquipo from "./pages/inscripcion-equipo/InscripcionEquipo";
import MapaCorrelatividades from "./pages/mapa-correlatividades/MapaCorrelatividades";
import SeguimientoCarrera from "./pages/seguimiento-carrera/SeguimientoCarrera";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import iconoUnlam from "./imgs/unlam_icono_sinbg.ico";

function addHeader(component) {
  return (
    <div>
      {" "}
      <Header />
      {component}
    </div>
  );
}

function onlyIframe(src) {
  return (
    <div style={{ height: "100vh", "background-color": "rgb(0, 116, 25)" }}>
      <Header
        styled={true}
        styles={{ height: "6vh" }}
        opcionVolver={true}
        src={src}
      />
      <iframe
        src={src}
        style={{ width: "100%", height: "93vh", "overflow-y": "hidden" }}
      ></iframe>
    </div>
  );
}

function App() {
  const [section, setSection] = useState("/");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={addHeader(<LinksPage />)} />
        <Route path="*" element={addHeader(<LinksPage />)} />
        <Route
          path="calculadora-dificultades"
          element={addHeader(<CalculadoraDificultades />)}
        />
        <Route
          path="inscripcion-equipo"
          element={addHeader(<InscripcionEquipo />)}
        />
        <Route
          path="mapa-correlatividades"
          element={<MapaCorrelatividades />}
          changeSection={setSection}
        />
        <Route
          path="seguimiento-carrera"
          element={addHeader(<SeguimientoCarrera />)}
        />
        <Route
          path="opinion-profs-excel"
          element={onlyIframe(
            "https://docs.google.com/spreadsheets/d/1-klLxNq9CvPH4CQbopeWbNJaviMA083FaomM_dChNI4/edit?gid=1536564690#gid=1536564690"
          )}
        />
        <Route
          path="miel-historico"
          element={onlyIframe("https://mielhistorico.unlam.edu.ar/")}
        ></Route>
        <Route
          path="dificultad-materias"
          element={onlyIframe(
            "https://docs.google.com/spreadsheets/d/1DtZ2W2C1E8auK8pYY2n2jy9Bw64Fh9g-j_GDtyFLEIw/edit?gid=0#gid=0"
          )}
        ></Route>
        <Route
          path="calendario-academico"
          element={onlyIframe(
            "https://www.unlam.edu.ar/index.php?seccion=8&idArticulo=449"
          )}
        ></Route>
        <Route
          path="intraconsulta"
          element={onlyIframe("https://alumno2.unlam.edu.ar/")}
        ></Route>
        {/* <Route
          path="miel"
          element={onlyIframe("http://miel.unlam.edu.ar/principal/home")}
        ></Route> */}
      </Routes>
    </div>
  );
}

/*
      <main>
        <CardContent
          title="Grupo de Discord"
          src={fotoDiscord}
          text="Unite al grupo de discord donde se comparten parciales, ejercicios y hay un foro para hablar entre estudiantes"
          primary-color={"rgba(88, 101, 242, 0.5)"}
          secondary-color={"rgb(72, 82, 196)"}
          link-text="Unirse"
          link-href="https://discord.gg/RMMJHuUnrG"
        />
        <CardContent
          title="Drive de Pujia"
          src={fotoDrive}
          text="En este drive hay una carpeta por materia con ejercicios resueltos, resumenes y modelos de parcial."
          primary-color={"rgba(165, 177, 0, 0.7)"}
          secondary-color={"rgba(238, 255, 0, 0.7)"}
          link-text="Ver Drive"
          link-href="https://drive.google.com/drive/folders/1Du25znz9DURkQG82mZ5AJdRVT3c5LfR7"
        />
        <CardContent
          title="Opinion de profesores y comisiones"
          src={fotoGoogleSheets}
          text="En este excel se pueden ver las opiniones de los alumnos acerca de los docentes, esta en constante renovación con cada cuatrimestre hay opiniones nuevas"
          primary-color={"rgba(15, 177, 0, 0.7)"}
          secondary-color={"rgba(0, 255, 21, 0.7)"}
          link-text="Ver Opiniones"
          link-href="https://docs.google.com/spreadsheets/d/1-klLxNq9CvPH4CQbopeWbNJaviMA083FaomM_dChNI4/edit#gid=1536564690"
        />
        <CardContent
          title="Dificultad de materias"
          src={fotoGoogleSheets}
          text="En este excel los alumnos puntuan que tan dificiles son las materias, puede ser de ayuda para antes de cursar saber a que te estas enfrentando"
          primary-color={"rgba(15, 177, 0, 0.7)"}
          secondary-color={"rgba(0, 255, 21, 0.7)"}
          link-text="Ver Dificultades"
          link-href="https://docs.google.com/spreadsheets/d/1DtZ2W2C1E8auK8pYY2n2jy9Bw64Fh9g-j_GDtyFLEIw/edit?gid=0#gid=0"
        />
        <CardContent
          title="MIeL Histórico"
          src={fotoMiel}
          text="Esta página es un registro histórico de MIeL. Se pueden ver cuatrimestres pasados y es útil para volver a acceder a viejos materiales de estudio"
          primary-color={"rgba(15, 177, 0, 0.7)"}
          secondary-color={"rgba(0, 255, 21, 0.7)"}
          link-text="Ir a MIeL Histórico"
          link-href="https://mielhistorico.unlam.edu.ar/"
        />
        <CardContent
          title="Mapa de Correlativas"
          src={fotoGrafo}
          text="Vas a poder ver de forma FÁCIL las correlatividades de cada materia para planificar como inscribirte y tu ruta de materias a futuro"
          primary-color={"rgba(15, 177, 0, 0.7)"}
          secondary-color={"rgba(0, 255, 21, 0.7)"}
          link-text="Ver Mapa [OLD VERSION]"
          link-href="https://ingenieriainformaticaunlam.netlify.app/correlativas"
        />
        <CardContent
          title="Calculadora de Dificultades"
          src={fotoCalc}
          text="Vas a poder calcular que tan dificiles pueden ser distintas combinaciones de materias para el cuatrimestre"
          primary-color={"rgba(113, 175, 107, 0.7)"}
          secondary-color={"rgba(0, 255, 21, 0.7)"}
          link-text="[Coming Soon]"
        />
        <CardContent
          title="Seguimiento de Carrera"
          src={fotoGoogleSheets}
          text="Un excel completo que vas a poder ir rellenando con las materias que vas aprobando e ir viendo tu progreso"
          primary-color={"rgba(15, 177, 0, 0.7)"}
          secondary-color={"rgba(0, 255, 21, 0.7)"}
          link-text="Descargar"
          link-href={segExcel}
        />
      </main>
*/
export default App;
