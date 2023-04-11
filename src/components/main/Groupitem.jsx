import React from "react";

const Groupitem = ({ img, id }) => {
	return (
		<div>
			<img src={img} alt={id} />
		</div>
	);
};

export default Groupitem;
