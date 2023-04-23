import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import brand from "../../assets/svg/2piradRian.svg";
import burger from "../../assets/icons/burger.svg";
import style from "./style.module.css";
import Nav from "../Nav/Nav";

export default function Header() {
	const [closed, setClosed] = useState<boolean>();

	useEffect(() => {
		setClosed(window.innerWidth < 900);
		window.addEventListener("resize", () => setClosed(window.innerWidth < 900), false);
	}, []);

	return (
		<header className={`smallcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<Link href="/" aria-label="home page">
					<Image src={brand} className={style.iso} alt="isologotype" />
				</Link>

				<Image
					src={burger}
					alt="burger menu"
					className={style.burger}
					onClick={() => setClosed(false)}
				/>

				{!closed && <Nav setClosed={setClosed} />}
			</div>
		</header>
	);
}
