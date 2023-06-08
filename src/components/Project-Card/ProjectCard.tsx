import { Project } from "@/data/projects";
import style from "./style.module.css";
import ProjectTechs from "../Project-Tech/ProjectTech";
import Image from "next/image";

export default function ProjectCard({ title, description, img, techs, github }: Project) {
	return (
		<a className={style.anchor} aria-label="github project" href={github} target="_blank">
			<div className={style.container}>
				<Image
					src={require(`../../assets/projects/${img}`)}
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
