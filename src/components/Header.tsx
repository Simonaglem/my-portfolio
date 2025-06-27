import { Link, useRouterState } from '@tanstack/react-router';

const links = [
	{ label: 'Home', path: '/' },
	{ label: 'About', path: '/about' },
	{ label: 'Projects', path: '/projects' },
];

export function Header() {
	const { location } = useRouterState();
	const isActive = (path: string) =>
		location.pathname === import.meta.env.BASE_URL + path.replace(/^\//, '');

	return (
		<header className="bg-off-white text-dark-gray sticky top-0 flex items-center justify-center p-1 md:p-2 lg:p-4">
			<nav className="flex items-start gap-8 p-4 md:gap-20 lg:gap-40" aria-label="Main navigation">
				{links.map(({ label, path }) => (
					<Link
						key={path}
						to={path}
						className={`page-link ${isActive(path) ? 'active-page-link' : ''}`}
					>
						{label}
					</Link>
				))}
			</nav>
		</header>
	);
}
