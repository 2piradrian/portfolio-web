import js from "../../assets/techs/javascript.svg";
import ts from "../../assets/techs/typescript.svg";
import react from "../../assets/techs/react.svg";
import redux from "../../assets/techs/redux.svg";
import java from "../../assets/techs/java.svg";
import kotlin from "../../assets/techs/kotlin.svg";
import springboot from "../../assets/techs/springboot.svg";
import firebase from "../../assets/techs/firebase.svg";
import Image from "next/image";

type Props = {
	tech: string;
};

export default function ProjectTechs({ tech }: Props) {
	switch (tech) {
		case "JS":
			return <Image src={js} alt="" />;
		case "REACT":
			return <Image src={react} alt="" />;
		case "TS":
			return <Image src={ts} alt="" />;
		case "REDUX":
			return <Image src={redux} alt="" />;
		case "JAVA":
			return <Image src={java} alt="" />;
		case "KOTLIN":
			return <Image src={kotlin} alt="" />;
		case "FIREBASE":
			return <Image src={firebase} alt="" />;
		case "SPRINGBOOT":
			return <Image src={springboot} alt="" />;
		default:
			return <p>{tech}</p>;
	}
}
