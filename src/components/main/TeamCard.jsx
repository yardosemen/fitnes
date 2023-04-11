import { Box } from "@mui/material";
import React from "react";
const TeamCard = ({ img, name, description }) => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "248px",
				justifyContent: "flex-end",
				flexDirection: "column",
				color: "white",
			}}
		>
			<Box>
				<img src={img} alt={name} />
			</Box>

			<Box
				sx={{
					width: "248px",
					height: "145px",
					position: "absolute",
					backgroundImage: "url(' ./img/RectangleTeamCard.svg') ",
					borderRadius: "24px",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					flexWrap: "nowrap",
					alignItems: "center",
				}}
			>
				<h3>{name}</h3>
				<span>{description}</span>
			</Box>
		</Box>
	);
};

export default TeamCard;
