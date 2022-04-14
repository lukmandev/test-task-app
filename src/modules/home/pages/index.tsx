import {Box, Container, Grid, TextField, Typography} from '@mui/material';
import {ChangeEvent, useEffect, useMemo} from 'react';
import {makeStyles} from '@mui/styles';
import {useInView} from 'react-cool-inview';
import {useState} from 'react';

import {fetchPosts} from '@store/reducers/posts/actions';
import {selectPostState} from '@store/reducers/posts/selectors';
import PostItem from '@components/PostItem';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import PostItemSkeleton from '@components/PostItem/skeleton';
import {
	setPosts,
	setPostsError,
	setPostsLoaded,
} from '@store/reducers/posts/slice';

const useStyles = makeStyles({
	container: {
		padding: '40px 0px',
	},
	sleepTimeTextField: {
		marginBottom: 20,
	},
	noMorePostWrapper: {
		padding: '20px 0',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Home = () => {
	const styles = useStyles();
	const dispatch = useAppDispatch();
	const postState = useAppSelector(selectPostState);
	const [limit] = useState(9);
	const [offset, setOffset] = useState(0);
	const [sleepTime, setSleepTime] = useState(1000);
	const isMoreThanTotalCount = useMemo(
		() => offset + limit > postState.totalCount,
		[offset, postState.totalCount]
	);

	const {observe, inView} = useInView({
		threshold: 0.25,
	});

	useEffect(() => {
		return () => {
			dispatch(setPostsLoaded(false));
			dispatch(setPostsError(null));
			dispatch(setPosts([]));
		};
	}, []);

	useEffect(() => {
		dispatch(fetchPosts({limit, offset, sleepTime}));
	}, [limit, offset]);

	useEffect(() => {
		const isLoadedAndHasNoError =
			postState.postsLoaded && !postState.postsError;
		if (inView && isLoadedAndHasNoError && !isMoreThanTotalCount) {
			setOffset((prev) => prev + limit);
		}
	}, [inView, postState.postsLoaded]);

	const handleSleepTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSleepTime(+e.target.value);
	};

	const postsOut = useMemo(() => {
		return postState.posts.map((elem) => (
			<Grid item md={4} key={elem.id}>
				<PostItem item={elem} />
			</Grid>
		));
	}, [postState]);

	const outPosts = useMemo(() => {
		if (postState.postsLoaded) {
			if (postState.postsError) {
				return <Typography>{postState.postsError}</Typography>;
			}
			if (postState.posts.length) {
				return postsOut;
			}
			return <Typography>Нету постов</Typography>;
		}
		const skeletons = Array(limit)
			.fill(0)
			.map((_, i) => (
				<Grid item md={4} key={i}>
					<PostItemSkeleton />
				</Grid>
			));
		return [...postsOut, skeletons];
	}, [postState]);

	const outNoMorePostInfo = useMemo(() => {
		if (
			postState.postsLoaded &&
			!postState.postsError &&
			isMoreThanTotalCount
		) {
			return (
				<Box className={styles.noMorePostWrapper}>
					<Typography fontSize={30}>Больше нету постов</Typography>
				</Box>
			);
		}
	}, [postState, isMoreThanTotalCount]);

	return (
		<Container className={styles.container}>
			<TextField
				label="Задержка запроса в миллисекундах"
				type="number"
				value={sleepTime}
				onChange={handleSleepTimeChange}
				className={styles.sleepTimeTextField}
			/>
			<Grid container spacing={2}>
				{outPosts}
			</Grid>
			<div ref={observe} data-testid="main-page" />
			{outNoMorePostInfo}
		</Container>
	);
};

export default Home;
