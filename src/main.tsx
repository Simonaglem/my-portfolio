import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({ routeTree, basepath: import.meta.env.BASE_URL });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const redirect = sessionStorage.redirect;

if (redirect) {
	sessionStorage.removeItem('redirect');
	window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
