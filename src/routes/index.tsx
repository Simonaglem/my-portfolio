import { createFileRoute, Link } from '@tanstack/react-router';
import profileImg from '../assets/profile.png';

export const Route = createFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section>
			<section className="page-intro-section hero-section">
				<h1>Welcome to Simona's Portfolio</h1>
				<em className="mb-6 p-2 text-sm md:text-base lg:text-lg">
					Front-End Developer in the Making
				</em>
				<Link to="/about" className="link-btn">
					Learn More About Me &#x27F6;
				</Link>
			</section>
			<section className="page-main-section home-summary">
				<img
					src={profileImg}
					alt="Simona Glemžaitė Photo"
					className="max-w-52 rounded-full md:max-w-60 lg:max-w-64"
				/>
				<p className="max-w-48 text-center md:max-w-60 md:text-start lg:max-w-80">
					Aspiring front-end developer learning to build the web, one pixel at a time.
					<br /> After working with Microsoft ERP systems, I'm now channeling my creativity into
					clean, functional, and user-focused interfaces.
				</p>
			</section>
		</section>
	);
}
