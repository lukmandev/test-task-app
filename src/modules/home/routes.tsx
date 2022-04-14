import loadable from '@loadable/component';
import {Route} from 'react-router-dom';

const Home = loadable(() => import('./pages'));

export enum HomeRoutesEnum {
	MAIN = '/',
}

const homeRoutes = [
	<Route key="Home" path={HomeRoutesEnum.MAIN} element={<Home />} />,
];

export default homeRoutes;
