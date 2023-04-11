import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicesPage from "./components/servicesFit/ServicesPage";
import Layout from "./Layout";
import Main from "./pages/Main";
import ClubCardPages from "./components/ClubCardPage/ClubCardPages";

const Routing = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/aboutclub" element={<AboutPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/clubcard" element={<ClubCardPages />} />
			</Routes>
		</Layout>
	);
};

export default Routing;
