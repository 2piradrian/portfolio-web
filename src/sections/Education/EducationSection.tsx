import Title from "@/components/Title/Title";
import style from "./style.module.css";
import EducationCard from "@/components/Education-Card/EducationCard";

export default function EducationSection() {
	return (
		<div className="wrapcontainer">
			<Title title="My education" />
			<div className={style.container}>
				<EducationCard
					institution="Universidad Tecnológica Nacional"
					certificate="Systems Engineering"
					date="2023 - present"
				/>
				<EducationCard
					institution="Universidad Nacional de Córdoba"
					certificate="Electromechanical Engineering"
					date="2020 - 2022 (change of specialty)"
				/>
				<EducationCard
					institution="Nucba"
					certificate="Full Stack Developer"
					date="2022 - 2023"
				/>
				<EducationCard
					institution="CoderHouse"
					certificate="Initial Java and Spring Boot "
					date="2023 - 2023"
				/>
			</div>
		</div>
	);
}
