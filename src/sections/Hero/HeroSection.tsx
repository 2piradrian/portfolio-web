import Image from "next/image";
import circle from "../../assets/svg/circle.svg";
import style from "./style.module.css";

export default function HeroSection() {
	return (
		<div className={`bigcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<div className={style.titleContainer}>
					<p className={style.title}>¡Hola!</p>
					<p className={style.title}>
						Yo soy <span>Adrián</span>,
					</p>
					<h1 className={style.title}>Software developer.</h1>
				</div>
				<Image className={style.circleDecoration} alt="decoration" src={circle} />
			</div>
		</div>
	);
}
