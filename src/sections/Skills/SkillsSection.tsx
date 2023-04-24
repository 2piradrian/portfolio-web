import Title from "@/components/Title/Title";
import { principal } from "@/data/skills";
import TechView from "@/components/Tech-View/TechView";
import style from "./style.module.css";
import { techs } from "@/data/techs";

export default function SkillsSection() {
	return (
		<div className="bigcontainer">
			<Title title="Programming Skills" />
			<div className={style.container}>
				{principal.map((tech) => (
					<TechView key={tech.id} {...tech} />
				))}
			</div>
			<h2 className={style.subtitle}>{"<All Skills/>"}</h2>
			<div className={style.container}>
				{techs.map((tech) => (
					<TechView key={tech.id} {...tech} />
				))}
			</div>
		</div>
	);
}
