import { Container, Box } from "@mui/material";
import React from "react";
import { itemButton } from "../../Constans";
import MainCarousel from "./Carousel/MainCarousel";
const stockBackground = {
	height: "650px",
	backgroundImage: "url(' ./img/Wood_Illustration .svg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: "#00100F",
};
const buttonstock = {
	width: "133px",
	height: "42px",

	background: "rgba(255, 255, 255, 0.2)",
	opacity: "0.8",
	backdropFilter: "blur(15px)",
	borderRadius: "12px",
	color: "white",
	cursor: "pointer",
};
const StockMain = () => {
	return (
		<div style={stockBackground}>
			<Container>
				<Box>
					<h1 style={{ paddingTop: "20px", margin: "0", color: "white" }}>
						Акции
					</h1>
					<Box sx={{ display: "flex", gap: "10px" }}>
						{itemButton.map((item, index) => (
							<button variant="outlined" size="medium" style={buttonstock}>
								{item}
							</button>
						))}
					</Box>
					<Box sx={{ paddingTop: "30px" }}>
						<MainCarousel />
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default StockMain;
