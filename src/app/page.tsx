import Education from "@/sections/Education/Education";
import Experience from "@/sections/Experience/Experience";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";
import Skills from "@/sections/Skills/Skills";

export default function Home() {
	return (
		<main>
			<Hero />
			<Skills />
			<Experience />
			<Projects />
			<Education />
		</main>
	);
}
