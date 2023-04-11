import React from "react";
import { Container, Box } from "@mui/material";
import { cardItems } from "../../Constans";
import CardItems from "../servicesFit/CardItems";
import Grid from "@mui/material/Unstable_Grid2";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "500px",
};
const buttonClubCard = {
	width: "314px",
	height: "55px",
	background: "linear-gradient(180deg, #32DDD4 0%, #1A746F 100%)",
	boxShadow:
		"7.10295e-16px 11.6px 23.2px rgba(8, 35, 34, 0.5585), inset -3.64618e-16px -5.95467px 5.95467px #176561, inset 3.64618e-16px 5.95467px 5.95467px #36ECE3",
	borderRadius: "12px",
	color: "white",
};
const ClubCardAbout = () => {
	return (
		<div style={rectangleTeam}>
			<Container sx={{ paddingTop: "60px" }}>
				<img src="./img/clubCardStudies.png" alt="Clubcard" />
				<Box
					sx={{
						display: "flex",
						color: "white",
						paddingTop: "30px",
						gap: "30px",
					}}
				>
					<Grid xs={8}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "flex-start",
								gap: "22px",
							}}
						>
							{cardItems.map((items, id) => {
								return <CardItems {...items} key={id} />;
							})}
						</Box>
					</Grid>

					<Grid sx={4}>
						<Box>
							<span>
								Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг),
								множеством силовых тренажеров и набором штанг.
								<br /> Под каждую группу мышц есть как минимум 5 разновидностей
								оборудования. Тренажерный зал оборудован гантельным рядом (от 1
								до 40 кг), множеством силовых тренажеров и набором штанг. <br />
								Под каждую группу мышц есть как минимум 5 разновидностей
								оборудования.
								<br /> Тренажерный зал оборудован гантельным рядом (от 1 до 40
								кг), множеством силовых тренажеров и набором штанг.
							</span>
							<button style={buttonClubCard}> Подробнее</button>
						</Box>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default ClubCardAbout;
