import React from "react";
import ReactDOM from "react-dom/client";
import RouterConfig from "./navigation/RouterConfig";
import "./styles.scss";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterConfig />
	</React.StrictMode>
);



//TODO : SCSS // CSS