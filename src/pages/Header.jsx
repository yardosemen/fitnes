import { Container } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/header/HeaderMenu";
import HeaderNav from "../components/header/HeaderNav";
const Header = () => {
	return (
		<>
			<Container
				maxWidth="sx"
				sx={{ backgroundColor: "#004643", padding: "0", margin: "0" }}
			>
				<HeaderNav />
			</Container>
			<Container
				maxWidth="sx"
				sx={{ backgroundColor: "#000908", padding: "0", margin: "0" }}
			>
				<HeaderMenu />
			</Container>
		</>
	);
};

export default Header;
