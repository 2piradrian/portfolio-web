import Image from "next/image";
import { Skill } from "@/data/skills";
import style from "./style.module.css";

function TechView({ name, img }: Skill) {
	return (
		<div className={style.box}>
			<Image src={img} alt={name} />
			<p>{name}</p>
		</div>
	);
}

export default TechView;
