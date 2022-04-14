import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Post} from 'types/post';

type sliceType = {
	postsLoaded: boolean;
	postsError: string | null;
	posts: Post[];
	totalCount: number;
};

const initialState: sliceType = {
	postsLoaded: false,
	postsError: null,
	posts: [],
	totalCount: 0,
};

const postsSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setPostsLoaded(state, action: PayloadAction<sliceType['postsLoaded']>) {
			state.postsLoaded = action.payload;
		},
		setPostsError(state, action: PayloadAction<sliceType['postsError']>) {
			state.postsError = action.payload;
		},
		setPosts(state, action: PayloadAction<sliceType['posts']>) {
			state.posts = action.payload;
		},
		setTotalCount(state, action: PayloadAction<sliceType['totalCount']>) {
			state.totalCount = action.payload;
		},
	},
});

export const {setPosts, setPostsError, setPostsLoaded, setTotalCount} =
	postsSlice.actions;

export default postsSlice.reducer;
