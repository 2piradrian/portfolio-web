import Image from "next/image";
import Link from "next/link";
import world from "../../assets/page/world.svg";
import mail from "../../assets/page/mail2.svg";
import style from "./style.module.css";

export default function Hero() {
	return (
		<section className="container" id="contact">
			<h1 className={style.name}>Adrián Rodriguez</h1>
			<p className={style.about}>Desarrollador de Software | Estudiante de ingeniería</p>
			<div className={style.location}>
				<Image src={world} alt="Residencia" />
				<p>Córdoba, Argentina.</p>
			</div>
			<div className={style.mail}>
				<Image src={mail} alt="Correo electrónico" />
				<p>rodriguezcadr@gmail.com</p>
			</div>
			<div className={style.contact}>
				<Link href="https://www.linkedin.com/in/rodriguezcadr/">Linkedin</Link>
				<Link href="https://github.com/2piradrian">Github</Link>
			</div>
		</section>
	);
}
