import { Container, Box } from "@mui/material";
import React from "react";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};
const Contacts = () => {
	return (
		<div style={rectangleTeam}>
			<Container
				sx={{
					padding: "40px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Box sx={{ color: "white" }}>
					<h1 style={{ paddingTop: "20px", margin: "0", color: "white" }}>
						Контакты
					</h1>
					<span>Адрес:</span>
					<h4>г.Киев м. Ясенево, ул. Голубинская, д. 16</h4>
					<span>Телефон: </span>
					<h4>+380992210304</h4>
					<span>E-mail:</span>
					<h4>moreon@more-on.ua</h4>
				</Box>
				<Box>
					<img src="./img/maps.svg" alt="maps" />
					{/* <iframe
						title="myFrame"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4484167798187!2d30.523012316158646!3d50.451373979475505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce505b8be8cd%3A0x6fbde9b021ab61dd!2z0JrRgNC10YnQsNGC0LjQug!5e0!3m2!1sru!2sua!4v1665487941137!5m2!1sru!2sua"
						width="400"
						height="300"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe> */}
				</Box>
			</Container>
		</div>
	);
};

export default Contacts;
