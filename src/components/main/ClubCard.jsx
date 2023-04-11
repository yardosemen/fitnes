import React from "react";
import { Container, Box } from "@mui/material";
import { clubCard } from "../../Constans";
import ClubCardItem from "./ClubCardItem";
const rectangle = {
	height: "100%",
	backgroundColor: "#00100F",
	backgroundImage: "url(' ./img/RectangleCard.svg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};
const ClubCard = () => {
	return (
		<div style={rectangle}>
			<Container>
				<Box sx={{}}>
					<h1 style={{ paddingTop: "20px", color: "white", margin: "0" }}>
						В каждой клубной карте
					</h1>
					<Box
						sx={{
							display: "flex",
							gap: "30px",
							flexWrap: "wrap",
							paddingTop: "60px",
						}}
					>
						{clubCard.map((item, index) => (
							<ClubCardItem {...item} key={index} />
						))}
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default ClubCard;
