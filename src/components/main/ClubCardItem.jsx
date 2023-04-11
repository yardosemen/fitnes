import React from "react";
import { Box } from "@mui/material";
const ClubCardItem = ({ img, title }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				alignContent: "center",
				color: "white",
				background:
					"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(181, 181, 181, 0.2) 100%)",
				backdropFilter: "blur(15px)",
				borderRadius: "24px",
				padding: "0 10px 0 10px",
				width: "248px",
				height: "200px",
				justifyContent: "center",
			}}
		>
			<img src={img} alt={title} />
			<span>{title}</span>
		</Box>
	);
};

export default ClubCardItem;
