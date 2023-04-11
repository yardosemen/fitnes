import { Box } from "@mui/material";
import React from "react";

const Galleryitem = ({ img, id }) => {
	return (
		<Box>
			<img src={img} alt={id} />
		</Box>
	);
};

export default Galleryitem;
