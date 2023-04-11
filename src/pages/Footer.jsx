import { Container, Box } from "@mui/material";
import React from "react";
import { footerbutton } from "../Constans";
import NearMeIcon from "@mui/icons-material/NearMe";
import CallIcon from "@mui/icons-material/Call";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const footersbackground = {
	backgroundColor: "#000908",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100%",
};

const Footer = () => {
	return (
		<div style={footersbackground}>
			<Container sx={{ padding: "20px", display: "flex" }}>
				<Box sx={{ gap: "20px", width: "15%", height: "20%" }}>
					<img src="./img/logoWhite.svg" alt="logo" />
					<Box
						sx={{
							color: "white",
							display: "flex",
							flexDirection: "column",

							fontSize: "14px",
							alignContent: "space-around",
						}}
					>
						<span>Время работы:</span>
						<span>Будни: 07:00 - 23:00</span>
						<span>Бассейн: 07:00 - 23:00</span>
						<span>Выходные: 09:00 - 23:00</span>
						<span>Бассейн: 09:00 - 23:00</span>
					</Box>
				</Box>
				<Box
					sx={{
						color: "white",
						gap: "10px",
						width: "50%",
						height: "192px",
						display: "flex",
						flexDirection: "column",
						flexWrap: "wrap",
						fontSize: "14px",
					}}
				>
					{footerbutton.map((item, index) => (
						<span>{item}</span>
					))}
				</Box>
				<Box
					sx={{
						color: "white",
						width: "21%",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						fontSize: "14px",
					}}
				>
					<span>
						<NearMeIcon />
						г. Киев, м. Яснево, ул. Голубинская д. 16
					</span>
					<span>
						<CallIcon />
						+380992210304
					</span>
					<span>
						<YouTubeIcon />
						<InstagramIcon />
						<FacebookIcon />
					</span>
					<Box>
						<span>Скачать приложение</span>
						<Box
							sx={{
								width: "100%",
								height: "100%",
								display: "flex",
								gap: "10px",
								paddingBottom: "10px",
							}}
						>
							<img src="./img/googlePlay.svg" alt="googlePlay" />
							<img src="./img/appStore.svg" alt="appStore" />
						</Box>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Footer;
