import Image from "next/image";
import profile from "../../assets/images/profile.webp";
import style from "./style.module.css";

export default function AboutSection() {
	return (
		<div className="bigcontainer">
			<Image src={profile} alt="profile image" className={style.profilePhoto} />
			<h1 className={style.title}>Adrián Rodriguez</h1>
			<div className={style.presentation}>
				<p>{`Hi, I'm Adrián, a software developer from Córdoba, Argentina.`}</p>
				<p>
					{`I love technology and the added value I find in it. 
					I'm very passionate about the idea of sharing and transmitting knowledge, 
					and I admire people who can do it well.`}
				</p>
			</div>
		</div>
	);
}
