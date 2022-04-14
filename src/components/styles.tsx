import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
	'@global': {
		'*': {
			boxSizing: 'border-box',
		},
		'html, body': {
			fontFamily: "'Montserrat', sans-serif",
			margin: 0,
		},
		a: {
			cursor: 'pointer',
		},
	},
});

const GlobalStyles = () => {
	useStyles();
	return null;
};

export default GlobalStyles;
