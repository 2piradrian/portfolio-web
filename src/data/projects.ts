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
		img: "siete.jpg",
		title: "Siete colores",
		description: "E-commerce proyecto familiar.",
		github: "https://github.com/2piradrian/siete-colores-web",
		techs: ["TS", "REACT", "REDUX", "FIREBASE"],
	},
	{
		id: 1,
		img: "recipes.jpg",
		title: "Recipes team",
		description: "Web-app colaborativa de recetas",
		github: "https://github.com/2piradrian/recipes-web",
		techs: ["TS", "REACT", "REDUX", "FIREBASE"],
	},
	{
		id: 1,
		img: "cswap.jpg",
		title: "C-Swap",
		description: "Web de mi equipo de trabajo freelancer",
		github: "https://github.com/2piradrian/c-swap-web",
		techs: ["TS", "REACT"],
	},
];
