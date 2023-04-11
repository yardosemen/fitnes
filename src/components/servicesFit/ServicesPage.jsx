import React from "react";
import ServicesBanner from "./ServicesBanner";
import DirectionsStudies from "./DirectionsStudies";
import Team from "../main/Team";
import ClubCardStudies from "./ClubCardStudies";
import ChildCenter from "../AboutPage/ChildCenter";
import Sauna from "../AboutPage/Sauna";
import FittnesBar from "../AboutPage/FittnesBar";
import About from "../main/About";

const ServicesPage = () => {
	return (
		<>
			<ServicesBanner />
			<DirectionsStudies />
			<Team />
			<ClubCardStudies />
			<ChildCenter />
			<Sauna />
			<FittnesBar />
			<About />
		</>
	);
};

export default ServicesPage;
