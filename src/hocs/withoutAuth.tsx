import {Navigate} from 'react-router-dom';

import Loader from '@components/Loader';
import {useAppSelector} from '@hooks/redux';
import {HomeRoutesEnum} from '@modules/home/routes';
import {selectAuthState} from '@store/reducers/auth/selectors';

function withoutAuth(Component: Function, ComponentProps?: any) {
	const Auth = () => {
		const authState = useAppSelector(selectAuthState);
		if (!authState.authInfoLoaded) {
			return <Loader />;
		}

		if (authState.isAuth) {
			return <Navigate to={HomeRoutesEnum.MAIN} />;
		}

		return <Component {...ComponentProps} />;
	};

	return Auth;
}

export default withoutAuth;
