import {AppBar, Container, Typography, Link as MuiLink} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {ReactNode} from 'react';
import {FC} from 'react';
import {Link} from 'react-router-dom';

interface Props {
	children?: ReactNode;
}

const useStyles = makeStyles({
	container: {
		padding: '40px 0',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 32,
		fontWeight: 600,
		color: '#fff',
	},
});

const MainLayout: FC<Props> = ({children}) => {
	const styles = useStyles();
	return (
		<>
			<AppBar position="sticky">
				<Container maxWidth="xl" className={styles.container}>
					<MuiLink
						underline="none"
						to="/"
						component={Link}
						className={styles.title}
					>
						The Core Startup Studio
					</MuiLink>
					<Link to="/login">Hello World</Link>
				</Container>
			</AppBar>
			{children}
		</>
	);
};

export default MainLayout;
