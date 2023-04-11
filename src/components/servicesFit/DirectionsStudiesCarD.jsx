import React from "react";
import { Box } from "@mui/material";
const DirectionsStudiesCarD = ({ img, title }) => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "89%",
				height: "98%",
				justifyContent: "flex-end",
				flexDirection: "column",
				color: "white",
				paddingBottom: "30px",
			}}
		>
			<Box sx={{ marginBottom: "-7px" }}>
				<img src={img} alt={img} />
			</Box>

			<Box
				sx={{
					width: "17%",
					height: "25%",
					position: "absolute",
					backgroundImage: "url(' ./img/RectangleTeamCard.svg') ",
					borderRadius: "24px",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<span>{title}</span>
			</Box>
		</Box>
	);
};

export default DirectionsStudiesCarD;
