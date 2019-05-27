import Home from '../pages/Home';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

const routes = [
	{
		exact: true,
		path: '/',
		component: Home,
		key: 'home'
	},
	{
		exact: true,
		path: '/search',
		component: Search,
		key: 'search'
	},
	{
		component: NotFound,
		key: 'notFound'
	},

];

export default routes;