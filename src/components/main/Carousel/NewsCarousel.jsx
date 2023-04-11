import React from "react";
import Carousel from "react-grid-carousel";
const NewsCarousel = () => {
	return (
		<Carousel cols={4} rows={1} gap={10} showDots={true} loop>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide1.svg" alt="1" />
				<h3>Приглашаем вас на презентацию новой студии «Body Art»</h3>
				<p>Body Art сочетание физической тренировки и дыхательных практик.</p>
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide2.svg" alt="2" />
				<h3>Выиграй клубную карту на 6 месяцев!</h3>
				<p>
					Испытай свою выносливость на соревнованиях и выиграй клубную карту на
					6 месяцев!
				</p>
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide3.svg" alt="3" />
				<h3>Самооборона для женщин Hands Off</h3>
				<p>Не будь “легкой” мешенью, занимайся в Moreon-Fitness</p>
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide4.svg" alt="4" />
				<h3>Приглашаем вас на презентацию новой студии «Body Art»</h3>
				<p>Body Art – сочетание физической тренировки и дыхательных практик.</p>
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide1.svg" alt="1" />
				<h3>Приглашаем вас на презентацию новой студии «Body Art»</h3>
				<p>Body Art – сочетание физической тренировки и дыхательных практик.</p>
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide2.svg" alt="2" />
				<h3>Выиграй клубную карту на 6 месяцев!</h3>
				<p>
					Испытай свою выносливость на соревнованиях и выиграй клубную карту на
					6 месяцев!
				</p>
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide3.svg" alt="3" />
				<h3>Самооборона для женщин Hands Off</h3>
				<p>Не будь “легкой” мешенью, занимайся в Moreon-Fitness</p>
			</Carousel.Item>
			<Carousel.Item>
				<img width="100%" src="./img/newsSlide4.svg" alt="4" />
				<h3>Приглашаем вас на презентацию новой студии «Body Art»</h3>
				<p>Body Art сочетание физической тренировки и дыхательных практик.</p>
			</Carousel.Item>
		</Carousel>
	);
};

export default NewsCarousel;
