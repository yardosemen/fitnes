import React from "react";
import StockMain from "../main/StockMain";
import AboutBanner from "./AboutBanner";
import Infrastructure from "./Infrastructure";
import AboutTabs from "./AboutTabs";
import Team from "../main/Team";
import AboutClubVideo from "./AboutClubVideo";
import FitClubZone from "./FitClubZone";
import Accordion from "./Accordion";
import ClubCard from "../main/ClubCard";
import AppMoreon from "./AppMoreon";
import FreezeCard from "./FreezeCard";
import VisitsClub from "./VisitsClub";
import Group from "../main/Group";
import Reviews from "./Reviews";
import ChildCenter from "./ChildCenter";
import Sauna from "./Sauna";
import FittnesBar from "./FittnesBar";
const AboutPage = () => {
	return (
		<>
			<AboutBanner />
			<Infrastructure />
			<StockMain />
			<AboutTabs />
			<Team />
			<AboutClubVideo />
			<FitClubZone />
			<Accordion />
			<ClubCard />
			<AppMoreon />
			<FreezeCard />
			<VisitsClub />
			<Group />
			<Reviews />
			<ChildCenter />
			<Sauna />
			<FittnesBar />
		</>
	);
};

export default AboutPage;
