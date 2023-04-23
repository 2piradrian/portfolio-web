import AppLayout from "@/layout/AppLayout";
import Hero from "@/sections/Hero/Hero";

export default function Home() {
	return (
		<AppLayout title="Home">
			<div className="bigcontainer">
				<Hero />
			</div>
		</AppLayout>
	);
}
