import { Project } from "@/data/projects";
import style from "./style.module.css";
import ProjectTechs from "../Project-Tech/ProjectTech";

export default function ProjectCard({ title, description, img, techs, github }: Project) {
	return (
		<a className={style.anchor} aria-label="github project" href={github}>
			<div className={style.container}>
				<img
					src={
						"https://img.freepik.com/free-vector/work-progress-rubber-stamp_1017-7150.jpg"
					}
					alt={title}
					className={style.image}
				/>
				<div className={style.info}>
					<div className={style.titleContainer}>
						<h3 className={style.title}>{title}</h3>
					</div>
					<div className={style.descriptionContainer}>
						<p className={style.description}>{description}</p>
					</div>
					<div className={style.technologiesContainer}>
						{techs.map((technology) => (
							<ProjectTechs tech={technology} key={technology} />
						))}
					</div>
				</div>
			</div>
		</a>
	);
}
