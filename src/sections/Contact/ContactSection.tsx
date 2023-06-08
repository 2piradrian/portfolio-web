import Title from "@/components/Title/Title";
import Image from "next/image";

import style from "./style.module.css";

import linkedin from "../../assets/svg/linkedin.svg";
import email from "../../assets/svg/mail.svg";
import github from "../../assets/svg/github.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

export default function ContactSection() {
	return (
		<div className="bigcontainer">
			<Title title="Contact me" />
			<div className={style.subcontainer}>
				<div className={style.divisor}>
					<a
						href="https://www.linkedin.com/in/rodriguezcadr/"
						aria-label="linkedin"
						target="_blank"
						rel="noreferrer">
						<Image src={linkedin} alt="linkedin" />
					</a>
					<a
						href="mailto:rodriguezcadr@gmail.com?subject=Contacto%20por%20portfolio"
						aria-label="email"
						target="_blank"
						rel="noreferrer">
						<Image src={email} alt="email" />
					</a>
				</div>
				<div className={style.divisor}>
					<a
						href="https://api.whatsapp.com/send?phone=543516135462"
						aria-label="whatsapp"
						target="_blank"
						rel="noreferrer">
						<Image src={whatsapp} alt="whatsapp" />
					</a>
					<a
						href="https://github.com/2piradrian"
						aria-label="github"
						target="_blank"
						rel="noreferrer">
						<Image src={github} alt="github" />
					</a>
				</div>
			</div>
		</div>
	);
}
