import {Box, Button, Container, Grid, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useMemo, useState} from 'react';

import {Post} from 'types/post';
import PostItem from '@components/PostItem';
import Modal, {IFormValues} from '../components/Modal';
import {getPostsFromLC} from '@utils/get-posts-from-ls';
import withAuth from '@hocs/withAuth';

const useStyles = makeStyles({
	container: {
		padding: '40px 0px',
	},
	topSide: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '20px 0',
	},
	noPostsWrapper: {
		width: '100%',
		padding: '30px 0',
	},
});

const Posts = () => {
	const styles = useStyles();
	const [posts, setPosts] = useState<Post[]>(getPostsFromLC());
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => setOpen(false);

	const handleSubmit = (values: IFormValues) => {
		const newPost = {
			id: Date.now(),
			userId: Date.now(),
			...values,
		};
		localStorage.setItem('posts', JSON.stringify([newPost, ...posts]));
		setPosts([newPost, ...posts]);
		setOpen(false);
	};

	const outPosts = useMemo(() => {
		if (posts.length) {
			return posts.map((elem) => (
				<Grid item md={4} key={elem.id}>
					<PostItem key={elem.id} item={elem} />
				</Grid>
			));
		}
		return (
			<Grid md={12} className={styles.noPostsWrapper}>
				<Typography fontSize={30} textAlign="center">
					У вас нету постов
				</Typography>
			</Grid>
		);
	}, [posts]);

	return (
		<Container className={styles.container}>
			<Box className={styles.topSide}>
				<Typography fontSize={30}>Ваши посты</Typography>
				<Button variant="outlined" onClick={() => setOpen(true)}>
					Создать пост
				</Button>
			</Box>
			<Grid container spacing={2}>
				{outPosts}
			</Grid>
			<Modal open={open} onClose={handleClose} onSubmit={handleSubmit} />
		</Container>
	);
};

export default withAuth(Posts);
