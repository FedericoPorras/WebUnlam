import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import iconoUnlam from "./imgs/unlam_icono_sinbg.ico";

function Header(props) {
  return (
    <div
      className="headerWrap"
      style={props.styled == true ? props.styles : {}}
    >
      <header>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src={iconoUnlam} id="header-icon"></img>
            UNLaM - Ingeniera en Informática
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link link-main-embed" href="/intraconsulta">
                  Intraconsulta
                </a>
              </li>
              */}
              {/* <li className="nav-item">
                <a className="nav-link link-main-embed" href="/miel">
                  MIeL
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link link-main-embed"
                  href="/calendario-academico"
                >
                  Calendario Académico
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/mapa-correlatividades">
                  Mapa de Correlatividades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/calculadora-dificultades">
                  Calculadora de Dificultades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/seguimiento-carrera">
                  Seguimiento de Carrera
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/inscripcion-equipo">
                  Inscripción en Equipos (Coming soon)
                </a>
              </li>
            </ul>
          </div>
          {props.opcionVolver ? (
            <div style={{ "margin-left": "auto", "margin-right": "2rem" }}>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
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
                <li className="nav-item">
                  <a
                    className="nav-link"
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
