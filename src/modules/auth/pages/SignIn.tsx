import {Button, Container, TextField} from '@mui/material';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {makeStyles} from '@mui/styles';

import {useAppDispatch} from '@hooks/redux';
import {setAuth} from '@store/reducers/auth/slice';
import withoutAuth from '@hocs/withoutAuth';

interface IFormValues {
	email: string;
	password: string;
}

const useStyles = makeStyles({
	container: {
		padding: '40px 0px',
	},
	form: {
		width: 500,
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridRowGap: 10,
		margin: '0 auto',
	},
});

const schema = yup.object().shape({
	email: yup.string().email('Невалидный email').required('Введите ваш email'),
	password: yup
		.string()
		.min(8, 'Минимум 8 символов')
		.max(32, 'Максимум 32 символов')
		.required('Введите пароль'),
});

const SignIn = () => {
	const dispatch = useAppDispatch();
	const styles = useStyles();
	const {
		register,
		formState: {errors},
		handleSubmit,
	} = useForm<IFormValues>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<IFormValues> = () => {
		localStorage.setItem('isAuth', 'true');
		dispatch(setAuth(true));
	};

	return (
		<Container className={styles.container} data-testid="signin-page">
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<TextField
					error={!!errors.email}
					label={errors.email?.message}
					{...register('email')}
				/>
				<TextField
					error={!!errors.password}
					label={errors.password?.message}
					{...register('password')}
				/>
				<Button variant="outlined" type="submit">
					Войти
				</Button>
			</form>
		</Container>
	);
};

export default withoutAuth(SignIn);
