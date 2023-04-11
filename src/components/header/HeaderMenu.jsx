import { Container, Box } from "@mui/material";
import React from "react";
import { navMenu } from "../../Constans";
import { NavLink } from "react-router-dom";
const HeaderMenu = () => {
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				height: "100px",
			}}
		>
			<NavLink to="/">
				<Box>
					<img src="./img/logo white.svg" alt="logo" />
				</Box>
			</NavLink>

			<Box sx={{ color: "white", display: "flex", gap: "40px" }}>
				{navMenu.map(({ title, path }) => (
					<NavLink to={path} style={{ textDecoration: "none", color: "white" }}>
						<span>{title}</span>
					</NavLink>
				))}
			</Box>
		</Container>
	);
};

export default HeaderMenu;
