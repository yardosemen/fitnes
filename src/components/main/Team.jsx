import { Container, Box } from "@mui/material";
import React from "react";
import { teamButton } from "../../Constans";
import { teamCard } from "../../Constans";
import TeamCard from "./TeamCard";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundImage: "url(' ./img/RectangleTeam.svg') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};
const buttonstock = {
	background: "rgba(255, 255, 255, 0.2)",
	opacity: "0.8",
	backdropFilter: "blur(15px)",
	borderRadius: "12px",
	color: "white",
	cursor: "pointer",
	height: "40px",
};
const Team = () => {
	return (
		<div style={rectangleTeam}>
			<Container>
				<Box>
					<h1 style={{ paddingTop: "20px", color: "white", margin: "0" }}>
						Расписание и команда
					</h1>
					<Box sx={{ display: "flex", gap: "30px", paddingTop: "20px" }}>
						{teamButton.map((item, index) => (
							<button variant="outlined" size="medium" style={buttonstock}>
								{item}
							</button>
						))}
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						gap: "30px",
						paddingTop: "20px",
					}}
				>
					{teamCard.map((item, index) => (
						<TeamCard {...item} key={index} />
					))}
				</Box>
			</Container>
		</div>
	);
};

export default Team;
