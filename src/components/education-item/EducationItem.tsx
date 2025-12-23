import { Education } from "@/types/types";
import style from "./style.module.css";

export default function EducationItem(education: Education) {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<h3 className={style.degree}>{education.name}</h3>
				<span className={style.date}>{education.date}</span>
			</div>
			<p className={style.institution}>{education.institution}</p>
		</div>
	);
}
