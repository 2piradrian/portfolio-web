import style from "./style.module.css";

type Props = {
	institution: string;
	certificate: string;
	date: string;
};

export default function EducationCard({ institution, certificate, date }: Props) {
	return (
		<div className={style.container}>
			<h2 className={style.institution}>{institution}</h2>
			<h3 className={style.description}>{certificate}</h3>
			<h4 className={style.date}>| {date}</h4>
		</div>
	);
}
