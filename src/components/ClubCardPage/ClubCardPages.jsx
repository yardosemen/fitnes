import React from "react";
import ClubCardBanner from "./ClubCardBanner";
import ClubCardAbout from "./ClubCardAbout";
import StockMain from "../main/StockMain";
import ClubCard from "../main/ClubCard";
const ClubCardPages = () => {
	return (
		<>
			<ClubCardBanner />
			<ClubCardAbout />
			<ClubCard />
			<StockMain />
		</>
	);
};

export default ClubCardPages;
