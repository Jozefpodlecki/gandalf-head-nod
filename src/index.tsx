import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import "normalize.css";
import "styles.scss";

const root = document.getElementById(process.env.root);

ReactDOM.render(
    <App />,
    root
);
