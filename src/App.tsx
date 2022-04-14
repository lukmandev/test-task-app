import {useEffect} from 'react';
import {Routes} from 'react-router-dom';

import MainLayout from '@components/MainLayout';
import homeRoutes from '@modules/home/routes';
import authRoutes from '@modules/auth/routes';
import {useAppDispatch} from '@hooks/redux';
import {getAuthInfo} from '@store/reducers/auth/actions';
import profileRoutes from '@modules/profile/routes';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAuthInfo());
	}, []);
	return (
		<MainLayout>
			<Routes>
				{homeRoutes}
				{authRoutes}
				{profileRoutes}
			</Routes>
		</MainLayout>
	);
};

export default App;
