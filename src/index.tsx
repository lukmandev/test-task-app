import {ThemeProvider, CssBaseline} from '@mui/material';
import {StyledEngineProvider} from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import store from '@store/reducer';
import GlobalStyles from '@components/styles';
import {muiTheme} from '@utils/mui-theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ThemeProvider theme={muiTheme}>
			<StyledEngineProvider injectFirst>
				<Provider store={store}>
					<App />
					<GlobalStyles />
					<CssBaseline />
				</Provider>
			</StyledEngineProvider>
		</ThemeProvider>
	</BrowserRouter>
);
