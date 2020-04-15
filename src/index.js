import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

// Basically the DOM Renderer File..

//hydrate instead of render is used for server side context
ReactDOM.hydrate(<App />, document.getElementById("mountNode"));
