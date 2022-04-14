import GlobalStyles from '@components/styles';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {createTheme, StyledEngineProvider} from '@mui/material/styles';
import store from '@store/reducer';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const theme = createTheme({
	typography: {
		fontFamily: "'Montserrat', sans-serif",
		fontSize: 14,
	},
});
root.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
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
