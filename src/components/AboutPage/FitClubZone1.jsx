import { Container, Box } from "@mui/system";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tab } from "semantic-ui-react";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "950px",
};
const buttonfitclub = {
	width: "314px",
	height: "55px",
	background: "linear-gradient(180deg, #32DDD4 0%, #1A746F 100%)",
	boxShadow:
		"7.10295e-16px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset -3.64618e-16px -5.95467px 5.95467px #176561, inset 3.64618e-16px 5.95467px 5.95467px #36ECE3",
	borderRadius: "12px",
	color: "white",
};

const FitClubZone1 = () => {
	const panes = [
		{
			menuItem: "Тренажерный зал",
			render: () => (
				<Tab.Pane>
					<Box sx={{ display: "flex", gap: "63px" }}>
						<Box>
							<Carousel width={525}>
								<div>
									<img alt="" src="./img/slideclub1.svg" />
								</div>
								<div>
									<img alt="" src="./img/slideclub2.svg" />
								</div>
								<div>
									<img alt="" src="./img/slideclub3.svg" />
								</div>
								<div>
									<img alt="" src="./img/slideclub4.svg" />
								</div>
							</Carousel>
						</Box>
						<Box
							sx={{
								color: "white",
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
								alignContent: "flex-start",
								alignItems: "flex-start",
								gap: "83px",
							}}
						>
							<img src="./img/traininghole.svg" alt="traininghole" />
							<span>
								Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
								множеством силовых тренажеров и набором штанг.
								<br /> Под каждую группу мышц есть как минимум 5 разновидностей
								оборудования.
							</span>
							<button style={buttonfitclub}>
								Записаться на гостевой визит
							</button>
						</Box>
					</Box>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Зал групповых тренировок",
			render: () => (
				<Tab.Pane attached={false}>
					<Box sx={{ display: "flex", gap: "63px" }}>
						<Box>
							<Carousel width={525}>
								<div>
									<img alt="" src="./img/slideclub1.svg" />
								</div>
								<div>
									<img alt="" src="./img/slideclub2.svg" />
								</div>
								<div>
									<img alt="" src="./img/slideclub3.svg" />
								</div>
								<div>
									<img alt="" src="./img/slideclub4.svg" />
								</div>
							</Carousel>
						</Box>
					</Box>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Зал кардио тренажеров",
			render: () => (
				<Tab.Pane attached={false}>
					<Box
						sx={{
							color: "white",
							display: "flex",
							flexDirection: "column",
							flexWrap: "wrap",
							alignContent: "flex-start",
							alignItems: "flex-start",
							gap: "83px",
						}}
					>
						<img src="./img/traininghole.svg" alt="traininghole" />
						<span>
							Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
							множеством силовых тренажеров и набором штанг.
							<br /> Под каждую группу мышц есть как минимум 5 разновидностей
							оборудования.
						</span>
						<button style={buttonfitclub}>Записаться на гостевой визит</button>
					</Box>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Зал единоборств",
			render: () => (
				<Tab.Pane attached={false}>
					<Box
						sx={{
							color: "white",
							display: "flex",
							flexDirection: "column",
							flexWrap: "wrap",
							alignContent: "flex-start",
							alignItems: "flex-start",
							gap: "83px",
						}}
					>
						<img src="./img/traininghole.svg" alt="traininghole" />
						<span>
							Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
							множеством силовых тренажеров и набором штанг.
							<br /> Под каждую группу мышц есть как минимум 5 разновидностей
							оборудования.
						</span>
						<button style={buttonfitclub}>Записаться на гостевой визит</button>
					</Box>
				</Tab.Pane>
			),
		},
	];
	return (
		<div style={rectangleTeam}>
			<Container sx={{ paddingTop: "30px", color: "white" }}>
				<img src="./img/fitZone.svg" alt="zoneclub" />
				<Tab panes={panes} menuItem={{ buttonfitclub }} />
			</Container>
		</div>
	);
};

export default FitClubZone1;
