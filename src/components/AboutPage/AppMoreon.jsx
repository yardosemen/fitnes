import { Container, Box } from "@mui/material";
import React from "react";

const stockBackground = {
	height: "600px",
	backgroundImage: "url(' ./img/Wood_Illustration .svg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: "#00100F",
};

const AppMoreon = () => {
	return (
		<div style={stockBackground}>
			<Container sx={{ display: "flex", paddingTop: "30px" }}>
				<Box>
					<img src="./img/appMoreon.svg" alt="banner" />
				</Box>
				<Box
					sx={{
						color: "white",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
					}}
				>
					<img src="./img/appMoreonTitle.svg" alt="title" />
					<span>
						Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
						множеством силовых тренажеров и набором штанг. Под каждую группу
						мышц есть как минимум 5 разновидностей оборудования. Тренажерный зал
						оборудован гантельным рядом (от 1 до 40 кг), множеством силовых
						тренажеров и набором штанг. Под каждую группу мышц есть как минимум
						5 разновидностей оборудования.
					</span>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							gap: "20px",
						}}
					>
						<img src="./img/googlePlay.svg" alt="googlePlay" />
						<img src="./img/appStore.svg" alt="appStore" />
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default AppMoreon;
