import {makeStyles} from '@mui/styles';
import {Box, CircularProgress} from '@mui/material';

const useStyles = makeStyles({
	wrapper: {
		position: 'fixed',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		background: '#fff',
		zIndex: 10000,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Loader = () => {
	const styles = useStyles();
	return (
		<Box className={styles.wrapper}>
			<CircularProgress />
		</Box>
	);
};

export default Loader;
