import Image from "next/image";
import close from "../../assets/icons/close.svg";
import style from "./style.module.css";
import Link from "next/link";

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
				<li className={style.navRoutes}>
					<Link href="/about" aria-label="about me">
						About me
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link href="/education" aria-label="education">
						Education
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link href="/projects" aria-label="projects">
						Projects
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link href="/skills" aria-label="skills">
						Skills
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link href="/contact" aria-label="contact">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}
