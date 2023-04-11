import React from "react";
import { Box } from "@mui/material";

const VisitsItemcard = ({ img, title, descriptions }) => {
	return (
		<Box>
			<Box
				sx={{
					width: "248px",
					justifyContent: "flex-start",
					flexDirection: "column",

					paddingLeft: "75px",
				}}
			>
				<img src={img} alt={title} />
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
					color: "white",
				}}
			>
				<h4>{title}</h4>
				<p>{descriptions}</p>
			</Box>
		</Box>
	);
};

export default VisitsItemcard;
