import { Project } from "@/types/types";
import ProjectElement from "@/components/project-element/ProjectElement";
import Chip from "@/components/chip/Chip";
import Title from "@/components/title/Title";
import style from "./style.module.css";

type Props = {
	project: Project;
};

export default function ProjectDetails({ project }: Props) {
	const { structure } = project;
	return (
		<section className="container">
			<div className={style.container}>
				<div className={style.techBox}>
					<Title text={project.title} />
					<p className={style.longDescription}>{structure?.longDescription}</p>
					<h3 className={style.techsTitle}>Hecho con:</h3>
					<div className={style.technologiesContainer}>
						{project.technologies.map((technology) => (
							<Chip key={technology} text={technology} />
						))}
					</div>
				</div>
				<div className={style.content}>
					<ProjectElement structure={structure} />
				</div>
			</div>
		</section>
	);
}