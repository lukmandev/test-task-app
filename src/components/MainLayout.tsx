import {ReactNode} from 'react';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Container, Box, Link as MuiLink} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {selectAuthState} from '@store/reducers/auth/selectors';
import {useAppSelector} from '@hooks/redux';
import {AuthRoutesEnum} from '@modules/auth/routes';
import {ProfileRoutesEnum} from '@modules/profile/routes';

interface MainLayoutPropsType {
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

const MainLayout: FC<MainLayoutPropsType> = ({children}) => {
	const styles = useStyles();
	const authState = useAppSelector(selectAuthState);

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
					<Box>
						{authState.isAuth ? (
							<Link to={ProfileRoutesEnum.POSTS}>Мои Посты</Link>
						) : (
							<>
								<Link to={AuthRoutesEnum.SIGNIN}>Войти</Link>
								<br />
								<Link to={AuthRoutesEnum.SIGNUP}>Зарегистрироваться</Link>
							</>
						)}
					</Box>
				</Container>
			</AppBar>
			{children}
		</>
	);
};

export default MainLayout;
