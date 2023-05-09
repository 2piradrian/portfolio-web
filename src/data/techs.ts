import html from "../assets/techs/html5.svg";
import css from "../assets/techs/css3.svg";
import js from "../assets/techs/javascript.svg";
import ts from "../assets/techs/typescript.svg";
import react from "../assets/techs/react.svg";
import redux from "../assets/techs/redux.svg";
import java from "../assets/techs/java.svg";
import kotlin from "../assets/techs/kotlin.svg";
import springboot from "../assets/techs/springboot.svg";
import compose from "../assets/techs/compose.svg";

export type Tech = {
	id: number;
	name: string;
	img: string;
};

export const techs: Tech[] = [
	{
		id: 0,
		name: "HTML",
		img: html,
	},
	{
		id: 1,
		name: "CSS",
		img: css,
	},
	{
		id: 2,
		name: "JavaScript",
		img: js,
	},
	{
		id: 3,
		name: "TypeScript",
		img: ts,
	},
	{
		id: 4,
		name: "React",
		img: react,
	},
	{
		id: 5,
		name: "Redux",
		img: redux,
	},
	{
		id: 8,
		name: "Java",
		img: java,
	},
	{
		id: 9,
		name: "Kotlin",
		img: kotlin,
	},
	{
		id: 10,
		name: "Spring Boot",
		img: springboot,
	} /*
	{
		id: 11,
		name: "Express",
		img: express,
	},
	{
		id: 12,
		name: "Node",
		img: node,
	}, */,
	{
		id: 13,
		name: "J. Compose",
		img: compose,
	},
];
