import {Modal as MuiModal, Box, TextField, Button} from '@mui/material';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {makeStyles} from '@mui/styles';

import {yupResolver} from '@hookform/resolvers/yup';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const useStyles = makeStyles({
	form: {
		width: '100%',
		padding: 20,
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridRowGap: 10,
	},
	textField: {
		width: '100%',
	},
});

const schema = yup.object().shape({
	title: yup.string().required('Введите название поста'),
	body: yup.string().required('Введите тело поста'),
});

export interface IFormValues {
	title: string;
	body: string;
}

type ModalPropsType = {
	open: boolean;
	onClose: () => void;
	onSubmit: (values: IFormValues) => void;
};

const Modal = ({onClose, open, onSubmit}: ModalPropsType) => {
	const styles = useStyles();
	const {
		register,
		formState: {errors},
		handleSubmit,
		reset,
	} = useForm<IFormValues>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const handleFormSubmit = (values: IFormValues) => {
		onSubmit(values);
		reset();
	};
	return (
		<MuiModal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
					<TextField
						className={styles.textField}
						error={!!errors.title}
						label={errors.title?.message}
						{...register('title')}
					/>
					<TextField
						className={styles.textField}
						multiline
						rows={6}
						error={!!errors.body}
						label={errors.body?.message}
						{...register('body')}
					/>
					<Button type="submit" variant="outlined">
						Создать пост
					</Button>
				</form>
			</Box>
		</MuiModal>
	);
};

export default Modal;
