import React from "react";
import Carousel from "react-grid-carousel";
const MainCarousel = () => {
	return (
		<Carousel cols={3} rows={1} gap={10} showDots={true} loop>
			<Carousel.Item>
				<img width="100%" height="100%" src="./img/slide1.svg" alt="1" />
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/slide2.svg" alt="2" />
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/slide3.svg" alt="3" />
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/slide1.svg" alt="4" />
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/slide2.svg" alt="5" />
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/slide3.svg" alt="6" />
			</Carousel.Item>
		</Carousel>
	);
};

export default MainCarousel;
