import {Routes} from 'react-router-dom';
import MainLayout from '@components/MainLayout';

import homeRoutes from './modules/home/routes';

const App = () => {
	return (
		<MainLayout>
			<Routes>{homeRoutes}</Routes>
		</MainLayout>
	);
};

export default App;
