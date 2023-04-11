import React from "react";
import { Container, Box } from "@mui/material";
import NewsCarousel from "./Carousel/NewsCarousel";
const newsBackground = {
	height: "650px",
	backgroundColor: "#00100F",
};
const NewsMain = () => {
	return (
		<div style={newsBackground}>
			<Container>
				<Box sx={{ color: "white" }}>
					<h1 style={{ paddingTop: "20px", color: "white", margin: "0" }}>
						Новости Фитнес клуба
					</h1>

					<Box sx={{ paddingTop: "30px" }}>
						<NewsCarousel />
					</Box>
				</Box>
			</Container>
		</div>
	);
};
export default NewsMain;
