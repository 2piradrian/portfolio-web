export type Skill = {
	id: number;
	name: string;
	img: string;
};

export const principal: Skill[] = [
	{
		id: 1,
		name: "TypeScript",
		img: require("../assets/techs/typescript.svg"),
	},
	{
		id: 2,
		name: "React",
		img: require("../assets/techs/react.svg"),
	},
	{
		id: 3,
		name: "Kotlin",
		img: require("../assets/techs/kotlin.svg"),
	},
	{
		id: 4,
		name: "Spring Boot",
		img: require("../assets/techs/springboot.svg"),
	},
];
