import { useState } from "react";
import "./Fitzone.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "800px",
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
const FitClubZone = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<div style={rectangleTeam}>
			<Container>
				<Box sx={{ paddingTop: "50px" }}>
					<img src="./img/format.svg" alt="format" />
				</Box>

				<div className="bloc-tabs">
					<button
						className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(1)}
					>
						Зал групповых тренировок
					</button>

					<button
						className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(2)}
					>
						Тренажерный зал
					</button>
					<button
						className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(3)}
					>
						Зал кардио тренажеров
					</button>
					<button
						className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(4)}
					>
						Зал единоборств
					</button>
				</div>

				<div className="content-tabs">
					<div
						className={
							toggleState === 1 ? "content  active-content" : "content"
						}
					>
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
									<br /> Под каждую группу мышц есть как минимум 5
									разновидностей оборудования.
								</span>
								<button style={buttonfitclub}>
									Записаться на гостевой визит
								</button>
							</Box>
						</Box>
					</div>

					<div
						className={
							toggleState === 2 ? "content  active-content" : "content"
						}
					>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							voluptatum qui adipisci.
						</h4>
					</div>

					<div
						className={
							toggleState === 3 ? "content  active-content" : "content"
						}
					>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
							nostrum rerum laudantium totam unde adipisci incidunt modi alias!
							Accusamus in quia odit aspernatur provident et ad vel distinctio
							recusandae totam quidem repudiandae omnis veritatis nostrum
							laboriosam architecto optio rem, dignissimos voluptatum beatae
							aperiam voluptatem atque. Beatae rerum dolores sunt.
						</h4>
					</div>
					<div
						className={
							toggleState === 4 ? "content  active-content" : "content"
						}
					>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							praesentium incidunt quia aspernatur quasi quidem facilis quo
							nihil vel voluptatum?
						</h4>
					</div>
				</div>
			</Container>
		</div>
	);
};
export default FitClubZone;
