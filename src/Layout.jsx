import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import { Box } from "@mui/system";
import Contacts from "./pages/Contacts";
import Header from "./pages/Header";
const Layout = ({ children }) => {
	return (
		<Box sx={{}}>
			<Header />
			<Outlet />
			{children}
			<Contacts />
			<Footer />
		</Box>
	);
};

export default Layout;
