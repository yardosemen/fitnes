import React from "react";
import { Container, Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";

const aboutBg = {
	height: "100%",
	backgroundImage: "url('./img/AboutBg.jpg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};
const gradientButton1 = {
	background: "linear-gradient(180deg, #32DDD4 0%, #1A746F 100%)",
	boxShadow:
		"7.10295e-16px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset -3.64618e-16px -5.95467px 5.95467px #176561, inset 3.64618e-16px 5.95467px 5.95467px #36ECE3",
	width: "216px",
	height: "55px",
	borderRadius: "12px",
	cursor: "pointer",
	color: "white",
};

const gradientButton2 = {
	width: "246px",
	height: "55px",
	background:
		"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(181, 181, 181, 0.2) 100%)",
	boxShadow:
		"1.22465e-15px 20px 40px rgba(51, 51, 51, 0.2), inset -5.60616e-16px -9.15556px 9.15556px rgba(162, 162, 162, 0.1), inset 5.60616e-16px 9.15556px 9.15556px rgba(255, 255, 255, 0.1)",
	backdropFilter: "blur(15px)",
	borderRadius: "12px",
	cursor: "pointer",
	color: "white",
};

const AboutBanner = () => {
	return (
		<div style={aboutBg}>
			<Container>
				<Grid container spacing={2}>
					<Grid xs={12} md={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
								paddingTop: "120px",
								width: "100%",
							}}
						>
							<img src="./img/titleAbout.svg" alt="titleabout" />
						</Box>
						<Box
							sx={{
								display: "flex",
								gap: "20px",
								flexDirection: "row",
								paddingTop: "50px",
								justifyContent: "center",
							}}
						>
							<button style={gradientButton1}>Узнать подробнее</button>
							<button style={gradientButton2}>Рассчитать стоимость</button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default AboutBanner;
