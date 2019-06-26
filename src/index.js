import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Pokedex from "./components/Pokedex";

import "./styles.css";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const rootElement = document.getElementById("root");
ReactDOM.render(<Pokedex />, rootElement);
