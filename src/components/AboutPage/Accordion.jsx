import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Box } from "@mui/material";

const rectangleTeam = {
	backgroundColor: "#00100F",
	backgroundImage: "url('./img/RectangleTeam.svg') ",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "650px",
};

const accordionstyle = {
	borderRadius: "20px",
	margin: "20px",
	background:
		"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(181, 181, 181, 0.2) 100%)",
	backdropFilter: "blur(15px)",
	color: "white",
};

export default function SimpleAccordion() {
	return (
		<div style={rectangleTeam}>
			<Container>
				<Box sx={{ paddingTop: "30px" }}>
					<img src="./img/questions.svg" alt="questions" />
				</Box>
				<Accordion style={accordionstyle}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>
							Мореон Фитнес есть возможность посещать Термальный комплекс и зону
							SPA?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							У членов клуба Мореон Фитнес есть возможность посещать роскошные
							зоны релаксации – Термальный комплекс и зону SPA с бассейнами,
							банями и саунами.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion style={accordionstyle}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Что входит в клубную карту?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							У членов клуба Мореон Фитнес есть возможность посещать роскошные
							зоны релаксации – Термальный комплекс и зону SPA с бассейнами,
							банями и саунами.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion style={accordionstyle}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel3a-content"
						id="panel3a-header"
					>
						<Typography>
							Что входит в клубную карту?Что входит в клубную карту?Что входит в
							клубную карту?Что входит в клубную карту? Что входит в клубную
							карту?Что входит в клубную карту?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							У членов клуба Мореон Фитнес есть возможность посещать роскошные
							зоны релаксации – Термальный комплекс и зону SPA с бассейнами,
							банями и саунами.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion style={accordionstyle}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Что входит в клубную карту?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							У членов клуба Мореон Фитнес есть возможность посещать роскошные
							зоны релаксации – Термальный комплекс и зону SPA с бассейнами,
							банями и саунами.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion style={accordionstyle}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>
							Что входит в клубную карту?Что входит в клубную карту?Что входит в
							клубную карту?Что входит в клубную карту?Что входит в клубную
							карту?Что входит в клубную карту?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							У членов клуба Мореон Фитнес есть возможность посещать роскошные
							зоны релаксации – Термальный комплекс и зону SPA с бассейнами,
							банями и саунами.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Container>
		</div>
	);
}
