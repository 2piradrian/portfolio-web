import Title from "@/components/title/Title";
import style from "./style.module.css";
import experience  from "@/public/data/experience.json"
import ExperienceItem from "@/components/experience-item/ExperienceItem";

export default function Experience() {
	return (
		<section className="container" id="experience">
			<Title text="Experiencia" />
			<div className={style.educationContainer}>
				{experience.map((item) => (
					<ExperienceItem key={item.id} {...item} />
				))}
			</div>
		</section>
	);
}
