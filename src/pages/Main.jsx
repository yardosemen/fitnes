import React from "react";
import MainBanner from "../components/main/MainBanner";
import StockMain from "../components/main/StockMain";
import NewsMain from "../components/main/NewsMain";
import ClubCard from "../components/main/ClubCard";
import Team from "../components/main/Team";
import Gallery from "../components/main/Gallery";
import Group from "../components/main/Group";
import About from "../components/main/About";
const Main = () => {
	return (
		<>
			<MainBanner />
			<ClubCard />
			<StockMain />
			<NewsMain />
			<Team />
			<Gallery />
			<Group />
			<About />
		</>
	);
};

export default Main;
