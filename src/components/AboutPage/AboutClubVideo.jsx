import React from "react";
import { Container, Box } from "@mui/material";

const stockBackground = {
	height: "600px",
	backgroundImage: "url(' ./img/Wood_Illustration .svg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: "#00100F",
};

const AboutClubVideo = () => {
	return (
		<div style={stockBackground}>
			<Container sx={{ padding: "30px" }}>
				<img src="./img/videoclub.svg" alt="video" />
				<Box
					sx={{
						borderRadius: "24px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<iframe
						width="800"
						height="450"
						src="https://www.youtube.com/embed/g2Et0HZ2fwg"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</Box>
			</Container>
		</div>
	);
};

export default AboutClubVideo;
