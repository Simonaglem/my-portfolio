import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="flex flex-col items-center justify-center p-8 text-center">
			<h2 className="text-dark-gray p-4 text-base md:p-6 md:text-lg lg:p-10 lg:text-2xl">
				404: Projects Not Found... Yet.
			</h2>
			<p className="text-dark-gray text-sm md:text-base lg:text-lg">
				In the meantime, you can check out my GitHub profile for ongoing work:
				<br />
				<a
					href="https://github.com/Simonaglem"
					className="text-coral hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					github.com/Simonaglem
				</a>
			</p>
		</section>
	);
}
