import Image from "next/image";
import close from "../../assets/icons/close.svg";
import style from "./style.module.css";
import Link from "next/link";
import NavItem from "./NavItem";

type Props = {
	setClosed: Function;
};

export default function Nav({ setClosed }: Props) {
	return (
		<div
			className={style.navBox}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<Image src={close} alt="close menu" className={style.close} />
			<ul className={style.navList}>
				<NavItem href="/about" arialabel="about me" title="About me" />
				<NavItem href="/education" arialabel="education" title="Education" />
				<NavItem href="/projects" arialabel="projects" title="Projects" />
				<NavItem href="/skills" arialabel="skills" title="Skills" />
				<NavItem href="/contact" arialabel="contact" title="Contact" />
			</ul>
		</div>
	);
}
