import { createFileRoute } from '@tanstack/react-router';
import webDesignIcon from '../../assets/web-design_2096999.png';

export const Route = createFileRoute('/about')({
	component: RouteComponent,
});

const skills = [
	'HTML5',
	'CSS3',
	'Tailwind CSS',
	'JavaScript',
	'TypeScript',
	'React (with Vite + TypeScript)',
	'TanStack Router',
	'TanStack Query',
	'Git / GitLab / GitHub',
	'npm',
];

function RouteComponent() {
	return (
		<section>
			<section className="page-intro-section about-section">
				<h2>About Me</h2>
				<p className="max-w-lg p-4 text-center text-sm leading-6 md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg lg:leading-8">
					I started my IT career working with Microsoft ERP systems.
					<br />
					Over time, I realized I wanted to create more interactive and visually engaging
					experiences, which led me to transition into web development.
					<br />
					I'm currently sharpening my front-end skills through the CCT Front-End Academy.
				</p>
			</section>
			<section className="p-4 md:pt-8 lg:pt-12">
				<h2 className="text-dark-gray text-center">Current Toolkit</h2>
				<section className="page-main-section about-summary">
					<img
						src={webDesignIcon}
						alt="Web Design Icon"
						className="max-w-32 md:max-w-40 lg:max-w-48"
					/>
					<ul className="text-coral-dark space-y-2 text-center text-base md:text-start md:text-lg lg:text-xl">
						{skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</section>
				<section className="p-6 text-center text-xs md:text-sm lg:p-10 lg:text-base">
					<em>Feel free to reach out at: simonaglem@gmail.com</em>
				</section>
			</section>
		</section>
	);
}
