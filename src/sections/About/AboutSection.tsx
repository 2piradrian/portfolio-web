import Image from "next/image";
import me from "../../assets/images/me.jpg";
import style from "./style.module.css";
import Title from "@/components/Title/Title";

export default function AboutSection() {
	return (
		<div className="bigcontainer">
			<Image src={me} alt="profile image" className={style.profilePhoto} />
			<Title title="Adrián Rodriguez" />
			<div className={style.presentation}>
				<p>{`Hi, I am Adrián, a software developer from Córdoba, Argentina.`}</p>
				<p>
					{`I love technology and the added value I find in it. 
					I am very passionate about the idea of sharing and transmitting knowledge, 
					and I admire people who can do it well.`}
				</p>
			</div>
		</div>
	);
}
