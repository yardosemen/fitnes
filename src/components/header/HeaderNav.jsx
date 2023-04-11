import { Box, Container } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const HeaderNav = () => {
	return (
		<Container sx={{ padding: "10px" }}>
			<Box
				sx={{
					display: "flex",
					flexWrap: "nowrap",
					justifyContent: "flex-end",
					gap: "39px",
					alignItems: "center",
				}}
			>
				<Box>
					<LocalPhoneIcon style={{ color: "white" }} />
					<span style={{ color: "white" }}>+380992210304</span>
				</Box>
				<box>
					<TelegramIcon style={{ color: "white" }} />
					<InstagramIcon style={{ color: "white" }} />
					<FacebookIcon style={{ color: "white" }} />
					<YouTubeIcon style={{ color: "white" }} />
				</box>
			</Box>
		</Container>
	);
};

export default HeaderNav;
