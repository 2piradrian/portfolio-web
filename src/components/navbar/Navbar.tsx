import NavItem from "./NavItem";
import style from "./style.module.css";

export default function Navbar() {
	return (
		<div>
			<ul className={style.navList}>
				<NavItem href="/#contact" arialabel="Contacto" title="Contacto" />
				<NavItem href="/#experience" arialabel="Experiencia" title="Experiencia" />
				<NavItem href="/#education" arialabel="Educación" title="Educación" />
			</ul>
		</div>
	);
}
