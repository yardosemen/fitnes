import React from "react";
import { breandsFittnes } from "../../Constans";
import { Container } from "@mui/material";
import Groupitem from "./Groupitem";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};
const Group = () => {
	return (
		<div style={rectangleTeam}>
			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					alignItems: "center",
					height: "300px",
					gap: "30px",
				}}
			>
				{breandsFittnes.map((item, index) => (
					<Groupitem {...item} key={index} />
				))}
			</Container>
		</div>
	);
};

export default Group;
