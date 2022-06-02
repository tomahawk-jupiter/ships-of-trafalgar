import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

// ReactDom.render(<App />, document.getElementById("app"));

// React v18 way of doing it
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
