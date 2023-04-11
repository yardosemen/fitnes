import React from "react";

const CardItems = ({ img, id }) => {
	return (
		<div>
			<img src={img} alt={id} />
		</div>
	);
};

export default CardItems;
