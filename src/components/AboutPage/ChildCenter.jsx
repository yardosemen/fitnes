import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const buttonchildCenter = {
	width: "314px",
	height: "55px",
	background: "linear-gradient(180deg, #32DDD4 0%, #1A746F 100%)",
	boxShadow:
		"7.10295e-16px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset -3.64618e-16px -5.95467px 5.95467px #176561, inset 3.64618e-16px 5.95467px 5.95467px #36ECE3",
	borderRadius: "12px",
	color: "white",
};

const stockBackground = {
	height: "100%",
	backgroundImage: "url(' ./img/Wood_Illustration .svg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: "#00100F",
};

const ChildCenter = () => {
	return (
		<div style={stockBackground}>
			<Container sx={{ display: "flex" }}>
				<Grid container spacing={2}>
					<Grid xs={12} md={6}>
						<Box>
							<img src="./img/ImgCenterChild.png" alt="childCenter" />
						</Box>
					</Grid>
					<Grid xs={12} md={6}>
						<Box
							sx={{
								color: "white",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<h1>Детский центр </h1>
							<p>
								Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
								множеством силовых тренажеров и набором штанг.
								<br />
								Под каждую группу мышц есть как минимум 5 разновидностей
								оборудования. Тренажерный зал оборудован гантельным рядом (от 1
								до 40 кг), множеством силовых тренажеров и набором штанг.
							</p>
							<button style={buttonchildCenter}>
								Записаться на бесплатное пробное занятие
							</button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default ChildCenter;
