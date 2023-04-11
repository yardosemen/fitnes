import { useState } from "react";
import "../../App.css";
import React from "react";
import { Container, Box } from "@mui/material";
import { buttonTabs } from "../../Constans";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "600px",
};
const buttonstock1 = {
	width: "224px",
	height: "42px",
	gap: "20px",
	background: "rgba(255, 255, 255, 0.2)",
	opacity: "0.8",
	backdropFilter: "blur(15px)",
	borderRadius: "12px",
	color: "white",
	cursor: "pointer",
};
const AboutTabs = () => {
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
						Тренажерный зал
					</button>

					<button
						className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(2)}
					>
						Групповые занятия
					</button>
					<button
						className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(3)}
					>
						Детские программы
					</button>
					<button
						className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(4)}
					>
						Красота и здоровье
					</button>
					<button
						className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(5)}
					>
						Авторские программы
					</button>
				</div>

				<div className="content-tabs">
					<div
						className={
							toggleState === 1 ? "content  active-content" : "content"
						}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "7px",
								height: "141px",
								flexWrap: "wrap",
							}}
						>
							{buttonTabs.map((item) => {
								return <button style={buttonstock1}>{item}</button>;
							})}
						</Box>

						<h4>
							Аэробные программы – семейный премиум фитнес-клуб с бассейном, 40
							видами групповых программ, детским клубом, школой единоборств и
							скалодромом. <br /> Оборудование тренажерного зала поставляет
							эксклюзивный партнер Олимпийских игр - Technogym, а тренировки
							проводят призеры российских и международных соревнований.
							<br />
							Групповые программы учитывают особенности нагрузок для женщин и
							мужчин, инструкторы тренируют детей и подростков, проводят занятия
							для пожилых людей. На сайте Мореон Фитнес описаны все программы,
							их польза, преимущества и расписание.
						</h4>
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
					<div
						className={
							toggleState === 5 ? "content  active-content" : "content"
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
export default AboutTabs;
