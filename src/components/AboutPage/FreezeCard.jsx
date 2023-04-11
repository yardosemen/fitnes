import { Container, Box } from "@mui/material";
import React from "react";
import { cardItems } from "../../Constans";
import CardItems from "../servicesFit/CardItems";
import Grid from "@mui/material/Unstable_Grid2";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "500px",
};
const FreezeCard = () => {
	return (
		<div style={rectangleTeam}>
			<Container sx={{ paddingTop: "60px" }}>
				<img src="./img/frezeCard.svg" alt="freezecard" />
				<Box
					sx={{
						display: "flex",
						color: "white",
						paddingTop: "30px",
						gap: "30px",
					}}
				>
					<Grid xs={4}>
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
						</Box>
					</Grid>

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
				</Box>
			</Container>
		</div>
	);
};

export default FreezeCard;
