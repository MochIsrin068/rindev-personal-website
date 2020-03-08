import { Blog, About, Home } from './pages'

export const routes = [
    {
		name: 'Home',
		url: '/',
		component: Home,
	},
	{
		name: 'Blog',
		url: '/blog',
		component: Blog,
	},
	{
		name: 'About',
		url: '/about',
		component: About,
	},
]