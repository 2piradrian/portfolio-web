import { Project } from "@/types/types";
import Link from "next/link";
import Tech from "../tech/Tech";
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
							<div key={technology} className={style.techIcon}>
								<Tech tech={technology} />
							</div>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
}
