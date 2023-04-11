import { Container, Box } from "@mui/material";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";

const servicesBg = {
	height: "450px",
	backgroundImage: "url('./img/clubcardBanner.png') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const buttonServices = {
	width: "156px",
	height: "55px",
	background: "linear-gradient(180deg, #32DDD4 0%, #1A746F 100%)",
	boxShadow:
		"7.10295e-16px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset -3.64618e-16px -5.95467px 5.95467px #176561, inset 3.64618e-16px 5.95467px 5.95467px #36ECE3",
	borderRadius: "12px",
	color: "white",
};

const ClubCardBanner = () => {
	return (
		<div style={servicesBg}>
			<Container>
				<Box sx={{ paddingTop: "30px" }}>
					<div role="presentation" onClick={handleClick}>
						<Breadcrumbs aria-label="breadcrumb">
							<NavLink
								style={{ textDecoration: "none", color: "white" }}
								color="inherit"
								to="/"
							>
								Главная
							</NavLink>

							<NavLink
								style={{ textDecoration: "none", color: "white" }}
								aria-current="page"
							>
								Клубные карты
							</NavLink>
						</Breadcrumbs>
					</div>
				</Box>
				<Box sx={{ paddingTop: "50px" }}>
					<img src="./img/CardBannerTitle.png" alt="titleCARD" />
				</Box>
				<Box
					sx={{
						color: "white",
						display: "flex",
						flexDirection: "column",
						width: "50%",
						gap: "39px",
					}}
				>
					<p>
						С клубной картой Мореон Фитнес вы становитесь членом клуба
						профессионалов и любителей спорта и здорового образа жизни.
						Сотрудников и клиентов Мореон Фитнес объединяет общая идея -
						"Присоединись к уникальности – стань уникальным!".
					</p>
					<button style={buttonServices}>Выбрать клубную карту</button>
				</Box>
			</Container>
		</div>
	);
};

export default ClubCardBanner;
