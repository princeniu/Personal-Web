import { json } from '@remix-run/cloudflare';
import { getHomeProjects } from '~/data/portfolio.server';

export const loader = () => json({ projects: getHomeProjects('en') });

export { Home as default, meta, links } from './home';
