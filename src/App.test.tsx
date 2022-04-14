import {render} from '@testing-library/react';

import AllProviders from './tests/redux-router';
import App from './App';

describe('Страницы отображаются', () => {
	test('Отображается главная страница', async () => {
		const app = render(
			<AllProviders initialRoute={'/'}>
				<App />
			</AllProviders>
		);
		await app.findByTestId('main-page');
	});
	test('Отображается страница со входом', async () => {
		const app = render(
			<AllProviders initialRoute={'/signin'}>
				<App />
			</AllProviders>
		);

		await app.findByTestId('signin-page');
	});
	test('Отображается страница с регистрацией', async () => {
		const app = render(
			<AllProviders initialRoute={'/signup'}>
				<App />
			</AllProviders>
		);

		await app.findByTestId('signup-page');
	});
});
