import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import LoadCDN from "load-cdn-component";
import PropTypes from "prop-types";

window.React = React;
window.PropTypes = PropTypes;
window.ReactDOM = ReactDOM;

LoadCDN.loadStyle("https://cdn.embedly.com/widgets/platform.js");
LoadCDN.loadComponent("https://cdn.embedly.com/widgets/platform.js");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
