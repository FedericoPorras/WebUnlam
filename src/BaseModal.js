import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./BaseModal.css";

function BaseModal(props) {
  var [modalShow, setModalShow] = useState(true);
  if (props.varShow != null && props.setVarShow != null) {
    console.log("a");
    var modalShow = props.varShow;
    var setModalShow = props.setVarShow;
  }

  let innerHTML;
  let title;

  if (props.modalType == "ComingSoon") {
    innerHTML = (
      <p>
        Estamos trabajando en el desarrollo de esta sección, así que todavía no
        se encuentra disponible
      </p>
    );
    title = "Sección habilitada proximamente";
  } else {
    innerHTML = props.innerHTML;
    title = props.title;
  }

  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        innerHTML={innerHTML}
        title={title}
      ></MyVerticallyCenteredModal>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.innerHTML}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default BaseModal;
