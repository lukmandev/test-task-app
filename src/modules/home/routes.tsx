import loadable from '@loadable/component';
import {Route} from 'react-router-dom';

const Home = loadable(() => import('./pages'));

const homeRoutes = [<Route key="Home" path="/" element={<Home />} />];

export default homeRoutes;
