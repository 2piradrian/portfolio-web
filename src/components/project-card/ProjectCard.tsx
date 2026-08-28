import { Project } from "@/types/types";
import Link from "next/link";
import Chip from "../chip/Chip";
import style from "./style.module.css";

export default function ProjectCard({ id, title, description, images, technologies }: Project) {
	return (
		<Link href={`/project/${id}`} aria-label={`View project ${title}`} className={style.link}>
			<div className={style.container}>
				<div className={style.thumbnailWrapper}>
					<img src={images[0]} alt={title} className={style.thumbnail} />
				</div>
				<div className={style.content}>
					<h3 className={style.title}>{title}</h3>
					<p className={style.description}>{description}</p>
					<div className={style.techStack}>
						{technologies.map((technology) => (
							<Chip key={technology} text={technology} />
						))}
					</div>
				</div>
			</div>
		</Link>
	);
}
