import { Box, Container } from "@mui/material";
import React from "react";
import Carousel from "react-grid-carousel";

const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "550px",
};

const reviews = {
	width: "340px",
	height: "251px",
	background:
		"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(181, 181, 181, 0.2) 100%)",
	backdropFilter: "blur(15px)",
	borderRadius: "24px",
	padding: "20px",
};

const Reviews = () => {
	return (
		<div style={rectangleTeam}>
			<img src="./img/Moreon-Fitness.svg" alt="fit" width="100%" />
			<Container>
				<Box>
					<h1 style={{ paddingTop: "20px", color: "white", margin: "0" }}>
						Отзывы
					</h1>
				</Box>

				<Carousel cols={3} rows={1} gap={10} showDots={true} loop>
					<Carousel.Item>
						<div style={reviews}>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<h3 style={{ color: "white" }}>Ольга</h3>
								<img src="./img/Stars.svg" alt="stars" />
							</Box>
							<Box sx={{ color: "white" }}>
								<p>
									Мореон Фитнес – семейный премиум фитнес-клуб с бассейном, 40
									видами групповых программ, детским клубом, школой единоборств
									и скалодромом. Оборудование тренажерного зала поставляет
									эксклюзивный партнер{" "}
								</p>
							</Box>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={reviews}>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<h3 style={{ color: "white" }}>Ольга</h3>
								<img src="./img/Stars.svg" alt="stars" />
							</Box>
							<Box sx={{ color: "white" }}>
								<p>
									Мореон Фитнес – семейный премиум фитнес-клуб с бассейном, 40
									видами групповых программ, детским клубом, школой единоборств
									и скалодромом. Оборудование тренажерного зала поставляет
									эксклюзивный партнер{" "}
								</p>
							</Box>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={reviews}>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<h3 style={{ color: "white" }}>Ольга</h3>
								<img src="./img/Stars.svg" alt="stars" />
							</Box>
							<Box sx={{ color: "white" }}>
								<p>
									Мореон Фитнес – семейный премиум фитнес-клуб с бассейном, 40
									видами групповых программ, детским клубом, школой единоборств
									и скалодромом. Оборудование тренажерного зала поставляет
									эксклюзивный партнер{" "}
								</p>
							</Box>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={reviews}>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<h3 style={{ color: "white" }}>Ольга</h3>
								<img src="./img/Stars.svg" alt="stars" />
							</Box>
							<Box sx={{ color: "white" }}>
								<p>
									Мореон Фитнес – семейный премиум фитнес-клуб с бассейном, 40
									видами групповых программ, детским клубом, школой единоборств
									и скалодромом. Оборудование тренажерного зала поставляет
									эксклюзивный партнер{" "}
								</p>
							</Box>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={reviews}>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<h3 style={{ color: "white" }}>Ольга</h3>
								<img src="./img/Stars.svg" alt="stars" />
							</Box>
							<Box sx={{ color: "white" }}>
								<p>
									Мореон Фитнес – семейный премиум фитнес-клуб с бассейном, 40
									видами групповых программ, детским клубом, школой единоборств
									и скалодромом. Оборудование тренажерного зала поставляет
									эксклюзивный партнер{" "}
								</p>
							</Box>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={reviews}>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<h3 style={{ color: "white" }}>Ольга</h3>
								<img src="./img/Stars.svg" alt="stars" />
							</Box>
							<Box sx={{ color: "white" }}>
								<p>
									Мореон Фитнес – семейный премиум фитнес-клуб с бассейном, 40
									видами групповых программ, детским клубом, школой единоборств
									и скалодромом. Оборудование тренажерного зала поставляет
									эксклюзивный партнер{" "}
								</p>
							</Box>
						</div>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	);
};

export default Reviews;
