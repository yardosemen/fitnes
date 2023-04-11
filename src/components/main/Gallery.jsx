import React from "react";
import { Container, Box, Button } from "@mui/material";
import { galleryItems } from "../../Constans";
import Galleryitem from "./Galleryitem";

const stockBackground = {
	height: "650px",
	backgroundImage: "url(' ./img/Wood_Illustration .svg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: "#00100F",
};
const buttonAllPhoto = {
	background: "rgba(255, 255, 255, 0.2)",
	opacity: "0.8",
	backdropFilter: "blur(15px)",
	borderRadius: "12px",
	color: "white",
	cursor: "pointer",
	height: "40px",
};
const Gallery = () => {
	return (
		<div style={stockBackground}>
			<Container>
				<Box sx={{ color: "white" }}>
					<h1 style={{ paddingTop: "20px", margin: "0", color: "white" }}>
						Фотогалерея
					</h1>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						gap: "10px",
						paddingTop: "20px",
					}}
				>
					{galleryItems.map((item, index) => (
						<Galleryitem {...item} key={index} />
					))}
				</Box>
				<Box
					sx={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}
				>
					<Button variant="outlined" style={buttonAllPhoto}>
						Смотреть все фото
					</Button>
				</Box>
			</Container>
		</div>
	);
};

export default Gallery;
