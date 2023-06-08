import Image from "next/image";
import close from "../../assets/icons/close.svg";
import style from "./style.module.css";
import NavItem from "./NavItem";

type Props = {
	setClosed: Function;
	closed: boolean | undefined;
};

export default function Nav({ setClosed, closed }: Props) {
	return (
		<div
			className={` ${style.navBox} ${!closed ? style.navBoxActive : style.navBoxInactive}`}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<Image src={close} alt="burger icon" className={style.close} />
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
