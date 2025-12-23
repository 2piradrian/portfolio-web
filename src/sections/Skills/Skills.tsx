import Title from "@/components/title/Title";
import Chip from "@/components/chip/Chip";
import skillsData from "@/public/data/skills.json"
import style from "./style.module.css";

export default function Skills() {
	return (
		<section className="container">
			<Title text="Habilidades" />
			<div className={style.groupContainer}>
				{skillsData.map((group, index) => (
					<div key={index} className={style.categoryGroup}>
						<h3 className={style.categoryTitle}>{group.category}</h3>
						<div className={style.skillsList}>
							{group.items.map((skill, skillIndex) => (
								<Chip key={skillIndex} text={skill} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
