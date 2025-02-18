import "bootstrap/dist/css/bootstrap.min.css";
import "./CardContent.css";

function CardContent(props) {
  return (
    <div>
      <div
        className="cardcontent"
        style={{
          backgroundColor: props["primary-color"],
          borderColor: props["secondary-color"],
          ...props.stylesGral,
        }}
      >
        <img className="card-img-top" src={props["src"]} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props["title"]}</h5>
          <p clasNames="card-text">{props["text"]}</p>
          <a
            href={props["link-href"]}
            target={props.stay == true ? "" : "blank"}
            className="btn btn-primary cardcontentlink"
            style={{
              backgroundColor: props["primary-color"],
              borderColor: props["secondary-color"],
              ...props.stylesButton,
            }}
          >
            {props["link-text"]}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardContent;
