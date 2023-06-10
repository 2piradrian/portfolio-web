import Title from "@/components/Title/Title";
import Image from "next/image";

import style from "./style.module.css";

import linkedin from "../../assets/svg/linkedin.svg";
import email from "../../assets/svg/mail.svg";
import github from "../../assets/svg/github.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import ContactCard from "@/components/Contact-Card/ContactCard";

export default function ContactSection() {
	return (
		<div className="bigcontainer">
			<Title title="Contact me" />
			<div className={style.subcontainer}>
				<div className={style.divisor}>
					<ContactCard
						href="https://www.linkedin.com/in/rodriguezcadr/"
						alt="Linkedin"
						img={linkedin}
					/>
					<ContactCard
						href="mailto:rodriguezcadr@gmail.com?subject=Contacto%20por%20portfolio"
						alt="Email"
						img={email}
					/>
				</div>
				<div className={style.divisor}>
					<ContactCard
						href="https://api.whatsapp.com/send?phone=543516135462"
						alt="Whatsapp"
						img={whatsapp}
					/>
					<ContactCard href="https://github.com/2piradrian" alt="Github" img={github} />
				</div>
			</div>
		</div>
	);
}
