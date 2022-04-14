import loadable from '@loadable/component';
import {Route} from 'react-router-dom';

const SignIn = loadable(() => import('./pages/SignIn'));
const SignUp = loadable(() => import('./pages/SignUp'));

export enum AuthRoutesEnum {
	SIGNIN = '/signin',
	SIGNUP = '/signup',
}

const authRoutes = [
	<Route key="SignIn" path={AuthRoutesEnum.SIGNIN} element={<SignIn />} />,
	<Route key="SignUp" path={AuthRoutesEnum.SIGNUP} element={<SignUp />} />,
];

export default authRoutes;
