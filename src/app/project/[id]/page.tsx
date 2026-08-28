import ProjectDetails from "@/sections/ProjectDetails/ProjectDetails";
import projects from "@/public/data/projects.json";
import archivedProjects from "@/public/data/archived_projects.json";

const allProjects = [...projects, ...archivedProjects];

export function generateStaticParams() {
	return allProjects.map((project) => ({
		id: project.id.toString(),
	}));
}

export default async function Project({ params }: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params;
	const projectId = parseInt(resolvedParams.id, 10);
	const project = allProjects.find((p) => p.id === projectId) || allProjects[0];

	return (
		<main>
			<ProjectDetails project={project} />
		</main>
	);
}

