import { Container, Box } from "@mui/material";
import React from "react";
import { studiesCard } from "../../Constans";
import DirectionsStudiesCarD from "./DirectionsStudiesCarD";
import Grid from "@mui/material/Grid";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};

const DirectionsStudies = () => {
	return (
		<div style={rectangleTeam}>
			<Container sx={{ paddingTop: "30px" }}>
				<Box sx={{ width: "40%", paddingBottom: "30px" }}>
					<img src="./img/StudiesServices.png" alt="studies" />
				</Box>

				<Grid container spacing={2}>
					{studiesCard.map((item, index) => (
						<Grid xs={6} md={4}>
							<DirectionsStudiesCarD {...item} key={index} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default DirectionsStudies;
