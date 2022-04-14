import {Navigate} from 'react-router-dom';

import Loader from '@components/Loader';
import {useAppSelector} from '@hooks/redux';
import {AuthRoutesEnum} from '@modules/auth/routes';
import {selectAuthState} from '@store/reducers/auth/selectors';

function withAuth(Component: Function, ComponentProps?: any) {
	const Auth = () => {
		const authState = useAppSelector(selectAuthState);
		if (!authState.authInfoLoaded) {
			return <Loader />;
		}

		if (!authState.isAuth) {
			return <Navigate to={AuthRoutesEnum.SIGNIN} />;
		}

		return <Component {...ComponentProps} />;
	};

	return Auth;
}

export default withAuth;
