import { Container, Box } from "@mui/material";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";

const servicesBg = {
	height: "100%",
	backgroundImage: "url('./img/mainServices.png') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};
const buttonServices = {
	width: "156px",
	height: "55px",
	background: "linear-gradient(180deg, #32DDD4 0%, #1A746F 100%)",
	boxShadow:
		"7.10295e-16px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset -3.64618e-16px -5.95467px 5.95467px #176561, inset 3.64618e-16px 5.95467px 5.95467px #36ECE3",
	borderRadius: "12px",
	color: "white",
};

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const ServicesBanner = () => {
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
								Услуги
							</NavLink>
						</Breadcrumbs>
					</div>
				</Box>
				<Box sx={{ paddingTop: "50px", width: "25%" }}>
					<img src="./img/ServicesTitle.png" alt="titleServices" />
				</Box>
				<Box
					sx={{
						color: "white",
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "30%",
						gap: "39px",
					}}
				>
					<p>
						Занятия фитнесом – это микс эффективных упражнений, мотивирующего
						влияния тренера, духа соревнований и общения с
						единомышленниками.Члены клуба Мореон Фитнес получают доступ к
						тренажерному залу, бассейнам, скалодрому и 40 видам групповых
						занятий для разного уровня подготовки и возраста – от начинающих до
						продвинутых спортсменов, для детей и взрослых.
					</p>
					<button style={buttonServices}>Записаться</button>
				</Box>
			</Container>
		</div>
	);
};

export default ServicesBanner;
