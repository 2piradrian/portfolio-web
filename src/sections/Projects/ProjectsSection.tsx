import Title from "@/components/Title/Title";
import { projectsArray } from "@/data/projects";
import style from "./style.module.css";
import ProjectCard from "@/components/Project-Card/ProjectCard";

export default function ProjectsSection() {
	return (
		<div className="wrapcontainer">
			<Title title="My projects" />
			<div className={style.container}>
				{projectsArray.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	);
}
