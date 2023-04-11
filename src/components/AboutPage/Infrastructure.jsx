import React from "react";
import { Container, Box } from "@mui/system";
import Carousel from "react-grid-carousel";
import Grid from "@mui/material/Unstable_Grid2";
const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100%",
};
const spabg = {
	backgroundImage: "url(' ./img/spaBg.svg ') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};

const Infrastructure = () => {
	return (
		<div style={rectangleTeam}>
			<Container>
				<Grid container spacing={2}>
					<Box sx={{ display: "flex" }}>
						<Grid xs={12} md={12}>
							<Box sx={{ padding: "30px" }}>
								<Carousel cols={1} rows={1} gap={10} showDots={true} loop>
									<Carousel.Item>
										<img
											width="100%"
											height="100%"
											src="./img/spa.svg"
											alt="1"
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/spa.svg" alt="2" />
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/spa.svg" alt="3" />
									</Carousel.Item>
								</Carousel>
							</Box>
						</Grid>

						<Box style={spabg} sx={{ color: "white", padding: "30px" }}>
							<h3>Спа-центр</h3>
							<span>
								«Мореон SPA» — уникальный банный спа-комплекс в стиле острова
								Санторини. Это самое большое спа-пространство в Москве, где
								можно отдохнуть от повседневного стресса. Здесь можно посетить
								бани и сауны, подышать в соляной пещере, пройтись по целительной
								дорожке Кнайпа, поплавать в бассейне, полежать в джакузи, а
								также воспользоваться спа-процедурами.
							</span>
						</Box>
					</Box>

					<Box sx={{ display: "flex" }}>
						<Grid xs={12} md={12}>
							<Box style={spabg} sx={{ color: "white", padding: "30px" }}>
								<h3>Кафе и рестораны</h3>
								<span>
									После тренировки вы сможете перекусить и отдохнуть в
									ресторанах и кафе. В фитнесе находятся собственные барные зоны
									с разнообразным меню. Также в холле комплекса расположены
									рестораны «Порт» и «Остров».
								</span>
							</Box>
						</Grid>

						<Box sx={{ padding: "30px" }}>
							<Carousel cols={1} rows={1} gap={10} showDots={true} loop>
								<Carousel.Item>
									<img
										width="100%"
										height="100%"
										src="./img/spa2.svg"
										alt="1"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img width="100%" src="./img/spa2.svg" alt="2" />
								</Carousel.Item>
								<Carousel.Item>
									<img width="100%" src="./img/spa2.svg" alt="3" />
								</Carousel.Item>
							</Carousel>
						</Box>
					</Box>
					<Box sx={{ display: "flex" }}>
						<Grid xs={12} md={12}>
							<Box sx={{ padding: "30px" }}>
								<Carousel cols={1} rows={1} gap={10} showDots={true} loop>
									<Carousel.Item>
										<img
											width="100%"
											height="100%"
											src="./img/spa3.svg"
											alt="1"
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/spa3.svg" alt="2" />
									</Carousel.Item>
									<Carousel.Item>
										<img width="100%" src="./img/spa3.svg" alt="3" />
									</Carousel.Item>
								</Carousel>
							</Box>
						</Grid>

						<Box style={spabg} sx={{ color: "white", padding: "30px" }}>
							<h3>Ресепшн</h3>
							<span>
								При входе в Moreon Fitness Вас встретят и помогут с любым
								вопросом на ресепшене. Радушный коллектив фитнес-центра проведет
								экскурсию по комплексу. Также вы можете связаться с нами по
								телефону +380992210304
							</span>
						</Box>
					</Box>
					<Box sx={{ display: "flex" }}>
						<Grid xs={12} md={12}>
							<Box style={spabg} sx={{ color: "white", padding: "30px" }}>
								<h3>Отдел продаж</h3>
								<span>
									По вопросам оформления карты и всем расценкам обращайтесь в
									отдел продаж.
								</span>
							</Box>
						</Grid>

						<Box sx={{ padding: "30px" }}>
							<Carousel cols={1} rows={1} gap={10} showDots={true} loop>
								<Carousel.Item>
									<img
										width="100%"
										height="100%"
										src="./img/spa4.svg"
										alt="1"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img width="100%" src="./img/spa4.svg" alt="2" />
								</Carousel.Item>
								<Carousel.Item>
									<img width="100%" src="./img/spa4.svg" alt="3" />
								</Carousel.Item>
							</Carousel>
						</Box>
					</Box>
				</Grid>
			</Container>
		</div>
	);
};

export default Infrastructure;
