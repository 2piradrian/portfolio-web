import { Experience } from "@/types/types";
import style from "./style.module.css";

export default function ExperienceItem(experience: Experience) {
	return (
		<div className={style.container}>
			<h3>{experience.position}</h3>
			<p>{experience.company}</p>
			<p>{experience.description}</p>
			<p>{experience.date}</p>
		</div>
	);
}
