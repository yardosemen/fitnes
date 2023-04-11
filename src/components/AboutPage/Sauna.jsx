import { Container, Box } from "@mui/material";
import React from "react";
import { saunaBtn } from "../../Constans";
import Carousel from "react-grid-carousel";
import Grid from "@mui/material/Unstable_Grid2";

const stockBackgroundSauna = {
	height: "100%",
	backgroundImage: "url(' ./img/BgSauna.svg ') ",
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
const buttonSauna = {
	width: "314px",
	height: "55px",
	background: "linear-gradient(180deg, #32DDD4 0%, #1A746F 100%)",
	boxShadow:
		"7.10295e-16px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset -3.64618e-16px -5.95467px 5.95467px #176561, inset 3.64618e-16px 5.95467px 5.95467px #36ECE3",
	borderRadius: "12px",
	color: "white",
};
const Sauna = () => {
	return (
		<div style={stockBackgroundSauna}>
			<Container>
				<Box sx={{ display: "flex", gap: "10px", paddingTop: "20px" }}>
					{saunaBtn.map((item, index) => (
						<button style={buttonstock}>{item}</button>
					))}
				</Box>
				<Box sx={{ display: "flex" }}>
					<Grid container spacing={2}>
						<Grid xs={12} md={6}>
							<Box
								sx={{
									color: "white",
									width: "50%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
							>
								<h1>Бани и бассейны</h1>
								<p>
									Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
									множеством силовых тренажеров и набором штанг. Под каждую
									группу мышц есть как минимум 5 разновидностей оборудования.
									Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
									множеством силовых тренажеров и набором штанг.
								</p>
								<button style={buttonSauna}>
									Записаться на гостевой визит
								</button>
							</Box>
						</Grid>
						<Grid xs={12} md={6}>
							<Box sx={{ padding: "30px" }}>
								<Carousel cols={1} rows={1} gap={10} showDots={true} loop>
									<Carousel.Item>
										<img
											width="100%"
											height="100%"
											src="./img/sauna.png"
											alt="1"
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/sauna.png" alt="2" />
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/sauna.png" alt="3" />
									</Carousel.Item>
								</Carousel>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default Sauna;
