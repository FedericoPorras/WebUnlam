import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import iconoUnlam from "./imgs/unlam_icono_sinbg.ico";

function Header(props) {
  return (
    <div class="headerWrap" style={props.styled == true ? props.styles : {}}>
      <header>
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/">
            <img src={iconoUnlam} id="header-icon"></img>
            UNLaM - Ingenieria en Informática
          </a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link link-main-embed" href="/intraconsulta">
                  Intraconsulta
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link link-main-embed"
                  href="/calendario-academico"
                >
                  Calendario
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link link-main-embed" href="/miel">
                  MIeL
                </a>
              </li> */}
              <li class="nav-item active">
                <a class="nav-link" href="/mapa-correlatividades">
                  Mapa de Correlatividades
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/calculadora-dificultades">
                  Calculadora de Dificultades
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/seguimiento-carrera">
                  Seguimiento de Carrera
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="/inscripcion-equipo">
                  Inscripción en Equipos (Coming soon)
                </a>
              </li>
            </ul>
          </div>
          {props.opcionVolver ? (
            <div style={{ "margin-left": "auto", "margin-right": "2rem" }}>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href={props.src}
                    style={{
                      padding: "0.25rem 0.5rem",
                      border: "dashed 1px white",
                      "border-radius": "1rem",
                      "margin-right": "4rem",
                    }}
                    target="blank"
                  >
                    Ir al sitio web
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/"
                    style={{
                      padding: "0.25rem 0.5rem",
                      border: "solid 3px white",
                      "border-radius": "1rem",
                    }}
                  >
                    Volver a la Página Principal
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
