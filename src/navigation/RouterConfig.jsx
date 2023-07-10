import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/404";
import About from "../pages/About";
import Layout from "../Layout/Layout";
import Logements from "../pages/Logements";

function RouterConfig() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logements/:id" element={<Logements />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default RouterConfig;
