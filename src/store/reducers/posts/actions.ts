import {createAsyncThunk} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import queryString from 'query-string';

import api from '@http/api';

import posts from '@data/posts.json';
import {Post} from 'types/post';
import {
	setPosts,
	setPostsError,
	setPostsLoaded,
	setTotalCount,
} from '../posts/slice';
import {RootState} from '@store/reducer';
import {sleep} from '@utils/sleep';

var mock = new MockAdapter(api);

mock.onGet(/posts\/?.*/).reply((config: any) => {
	const {
		query: {limit, offset},
	} = queryString.parseUrl(config.url);
	const offsetForSlice = (offset && +offset) || 0;
	const limitForSlice = (limit && +limit) || 10;
	const data = (posts as Post[]).slice(
		offsetForSlice,
		offsetForSlice + limitForSlice
	);
	return [200, {posts: data, totalCount: posts.length}];
});

export const fetchPosts = createAsyncThunk(
	'fetchPosts',
	async (
		{
			sleepTime,
			...limitAndOffset
		}: {limit: number; offset: number; sleepTime: number},
		{dispatch, getState}
	) => {
		const {posts: postState} = getState() as RootState;
		dispatch(setPostsLoaded(false));
		dispatch(setPostsError(null));
		try {
			const query = queryString.stringify(limitAndOffset);
			const {data} = await api.get(`/posts?${query}`);
			await sleep(sleepTime);
			dispatch(setTotalCount(data.totalCount));
			dispatch(setPosts([...postState.posts, ...data.posts]));
		} catch (e) {
			dispatch(setPostsError('Some Error Happened'));
		} finally {
			dispatch(setPostsLoaded(true));
		}
	}
);
