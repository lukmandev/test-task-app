import loadable from '@loadable/component';
import {Route} from 'react-router-dom';

const Posts = loadable(() => import('./pages/Posts'));

export enum ProfileRoutesEnum {
	POSTS = '/profile/posts',
}

const profileRoutes = [
	<Route key="Posts" path={ProfileRoutesEnum.POSTS} element={<Posts />} />,
];

export default profileRoutes;
