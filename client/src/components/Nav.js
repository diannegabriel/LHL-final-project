import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import GamifyModal from "./GamifyModal";
import './Nav.scss'
import "./rpgui.css";

export default function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <article id="nav-bar">
      <button onClick={handleShow} className="exclamation">
        {/* <i className="fas fa-plus-circle fa-3x"></i> */}
        <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/8be157fc744cf39.png" className="exclamation"/>
      </button>
      {/* <i className="far fa-calendar-alt fa-3x"></i> */}

      <Modal show={show} >
        <GamifyModal handleClose={handleClose} />
      </Modal>
    </article>
  );
}