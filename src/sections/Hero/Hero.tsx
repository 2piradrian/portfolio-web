import Image from "next/image";
import Link from "next/link";
import mail from "../../assets/page/mail2.svg";
import world from "../../assets/page/world.svg";
import style from "./style.module.css";

export default function Hero() {
	return (
		<section className="container" id="contact">
			<h1 className={style.name}>
				Adrián Rodriguez
			</h1>
			<p className={style.about}>
				Desarrollador de Software | Estudiante de ingeniería
			</p>
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
				<Link href="https://docs.google.com/spreadsheets/d/1YmP0-QebjkGPvkTo9ntigc7-bBILuzYB6fnYYnwU1IY/edit?gid=0#gid=0">Calificaciones</Link>
			</div>
		</section>
	);
}
