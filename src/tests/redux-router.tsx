import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import store from '@store/reducer';

const AllProviders = ({
	children,
	initialRoute,
}: {
	children: ReactNode;
	initialRoute: any;
}) => (
	<Provider store={store}>
		<MemoryRouter initialEntries={[initialRoute]}>{children}</MemoryRouter>
	</Provider>
);

export default AllProviders;
