import CardContent from "./CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import fotoDiscord from "../../imgs/discord.jpg";
import fotoDrive from "../../imgs/Google_Drive_Logo_128px.png";
import fotoGoogleSheets from "../../imgs/google_sheets.png";
import fotoMiel from "../../imgs/mielhistoricoazul.png";
import fotoGrafo from "../../imgs/grafo.png";
import fotoCalc from "../../imgs/calc.png";
import fotoExcel from "../../imgs/excel.jpg";
import segExcel from "../../imgs/Seguimiento-de-carrera-Ing._Informatica-2023_corregido.xlsx";

function LinksPage() {
  return (
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
        title="Opinion de profesores y comisiones"
        src={fotoGoogleSheets}
        text="En este excel se pueden ver las opiniones de los alumnos acerca de los docentes, esta en constante renovación con cada cuatrimestre hay opiniones nuevas"
        primary-color={"rgba(15, 177, 0, 0.7)"}
        secondary-color={"rgba(0, 255, 21, 0.7)"}
        link-text="Ver Opiniones"
        link-href="/opinion-profs-excel"
        stay={true}
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
        title="Dificultad de materias"
        src={fotoGoogleSheets}
        text="En este excel los alumnos puntuan que tan dificiles son las materias, puede ser de ayuda para antes de cursar saber a que te estas enfrentando"
        primary-color={"rgba(15, 177, 0, 0.7)"}
        secondary-color={"rgba(0, 255, 21, 0.7)"}
        link-text="Ver Dificultades"
        link-href="/dificultad-materias"
        stay={true}
      />
      <CardContent
        title="MIeL Histórico"
        src={fotoMiel}
        text="Esta página es un registro histórico de MIeL. Se pueden ver cuatrimestres pasados y es útil para volver a acceder a viejos materiales de estudio"
        primary-color={"rgba(88, 101, 242, 0.5)"}
        secondary-color={"rgb(72, 82, 196)"}
        link-text="Ir a MIeL Histórico"
        link-href="https://mielhistorico.unlam.edu.ar/"
      />
      <CardContent
        title="Mapas de Correlativas"
        src={fotoGrafo}
        text="Vas a poder ver de forma FÁCIL las correlatividades de cada materia para planificar como inscribirte y tu ruta de materias a futuro"
        primary-color={"rgba(255, 255, 255, 0.7)"}
        secondary-color={"rgba(0, 0, 0, 0.7)"}
        link-text="Ver Mapas"
        link-href="/mapa-correlatividades"
        stay={true}
        stylesGral={{ color: "black" }}
        stylesButton={{ color: "black" }}
      />
      <CardContent
        title="Calculadora de Dificultades"
        src={fotoCalc}
        text="Vas a poder calcular que tan dificiles pueden ser distintas combinaciones de materias para el cuatrimestre"
        primary-color={"rgba(255, 255, 255, 0.7)"}
        secondary-color={"rgba(0, 0, 0, 0.7)"}
        link-text="[Coming Soon]"
        stylesGral={{ color: "black" }}
        stylesButton={{ color: "black" }}
      />
      <CardContent
        title="Seguimiento de Carrera"
        src={fotoGoogleSheets}
        text="Un excel completo que vas a poder ir rellenando con las materias que vas aprobando e ir viendo tu progreso"
        primary-color={"rgba(11, 129, 0, 0.7)"}
        secondary-color={"rgba(0, 214, 18, 0.7)"}
        link-text="Descargar"
        link-href={segExcel}
      />
    </main>
  );
}

export default LinksPage;
