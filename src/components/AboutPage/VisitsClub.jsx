import React from "react";
import { Container, Box } from "@mui/material";
import { visitsItemcard } from "../../Constans";
import VisitsItemcard from "./VisitsItemcard";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundImage: "url('./img/RectangleTeam.svg') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "450px",
};

const VisitsClub = () => {
	return (
		<div style={rectangleTeam}>
			<Container sx={{ paddingTop: "30px" }}>
				<img src="./img/visitsClub.png" alt="visitsclub" />
				<Box
					sx={{
						display: "flex",
						gap: "20px",
						height: "200px",
						paddingTop: "30px",
					}}
				>
					{visitsItemcard.map((item, index) => (
						<VisitsItemcard {...item} key={index} />
					))}
				</Box>
			</Container>
		</div>
	);
};

export default VisitsClub;
