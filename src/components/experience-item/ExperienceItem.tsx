import { Experience } from "@/types/types";
import style from "./style.module.css";

export default function ExperienceItem(experience: Experience) {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<h3 className={style.position}>{experience.position}</h3>
				<span className={style.date}>{experience.date}</span>
			</div>
			<p className={style.company}>{experience.company}</p>
			<p className={style.description}>{experience.description}</p>
		</div>
	);
}
