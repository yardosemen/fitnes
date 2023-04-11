import React from "react";
import { Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
const bannerImg = {
	height: "650px",

	backgroundImage: "url(' ./img/ImgBanner.svg ') ",

	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};
const bannergradien = {
	height: "650px",
	backgroundImage: "url(' ./img/Bg.svg ') ",

	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};

const MainBanner = () => {
	return (
		<div style={bannergradien}>
			<Box style={bannerImg}>
				<Container
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box sx={{ color: "white", paddingTop: "20px" }}>
						<img src="./img/banneLogo.svg" alt="logoBanner" />
						<Box sx={{ paddingTop: "30px", color: "white" }}>
							<h2>| Гибкая клубная карта</h2>
							<h2>| Персональные тренировки</h2>
							<h2>| Все самые продвинутые программы 2022 года</h2>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<Button variant="contained" size="large">
									Узнать подробнее
								</Button>
								<Button variant="contained" size="large">
									Рассчитать стоимость
								</Button>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "20px",
							flexWrap: "nowrap",
							justifyContent: "space-around",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "162px",
								height: "129px",
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								borderRadius: "24px",
								color: "white",
								justifyContent: "space-around",
							}}
						>
							<span>500 000 м2</span>
							<span>Площадь зала</span>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "162px",
								height: "129px",
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								borderRadius: "24px",
								color: "white",
								justifyContent: "space-around",
							}}
						>
							<span>100 500</span>
							<span>
								Тренажеров <br />
								VIP уровня
							</span>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "162px",
								height: "129px",
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								borderRadius: "24px",
								color: "white",
								justifyContent: "space-around",
							}}
						>
							<span>
								Бассейны <br /> и <br /> СПА центр
							</span>
						</Box>
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default MainBanner;
