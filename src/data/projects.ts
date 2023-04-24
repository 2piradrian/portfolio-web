export type Project = {
	id: number;
	img: string;
	title: string;
	description: string;
	github: string;
	techs: Array<string>;
};

export const projectsArray: Project[] = [
	{
		id: 0,
		img: require("../assets/images/pj1.png"),
		title: "Siete colores",
		description: "E-commerce proyecto familiar.",
		github: "https://github.com/2piradrian/siete-colores-web",
		techs: ["TS", "REACT", "REDUX", "FIREBASE"],
	},
	{
		id: 1,
		img: require("../assets/images/pj2.png"),
		title: "Recipes team",
		description: "Web-app colaborativa de recetas",
		github: "https://github.com/2piradrian/recipes-web",
		techs: ["TS", "REACT", "REDUX", "FIREBASE"],
	},
];
