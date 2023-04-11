import { Container, Box } from "@mui/material";
import React from "react";
import Carousel from "react-grid-carousel";
import Grid from "@mui/material/Unstable_Grid2";
const stockBackgroundFittnesBar = {
	height: "100%",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: "#1E1E1E",
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

const FittnesBar = () => {
	return (
		<div style={stockBackgroundFittnesBar}>
			<Container sx={{ paddingTop: "30px", paddingBottom: "40px" }}>
				<Box sx={{ width: "25%" }}>
					<img src="./img/FittnessBartitle.png" alt="title" />
				</Box>
				<Box sx={{ display: "flex" }}>
					<Grid container spacing={2}>
						<Grid xs={12} md={6}>
							<Box sx={{ padding: "30px" }}>
								<Carousel cols={1} rows={1} gap={10} showDots={true} loop>
									<Carousel.Item>
										<img width="100%" src="./img/fittnesBar.png" alt="1" />
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/fittnesBar.png" alt="2" />
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/fittnesBar.png" alt="3" />
									</Carousel.Item>
								</Carousel>
							</Box>
						</Grid>
						<Grid xs={12} md={6}>
							<Box sx={{ color: "white", width: "50%", paddingTop: "50px" }}>
								<Box sx={{ width: "25%" }}>
									<img src="./img/fiitnessBarH1.png" alt="titleBar" />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										width: "100%",
									}}
								>
									<p>
										Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
										множеством силовых тренажеров и набором штанг. Под каждую
										группу мышц есть как минимум 5 разновидностей оборудования.
										Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
										множеством силовых тренажеров и набором штанг.
									</p>
									<button style={buttonstock}>Смотреть меню</button>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default FittnesBar;
