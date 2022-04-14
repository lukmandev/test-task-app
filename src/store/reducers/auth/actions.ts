import {createAsyncThunk} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import queryString from 'query-string';

import api from '@http/api';

import posts from '@data/posts.json';
import {Post} from 'types/post';
import {setPosts, setPostsError, setPostsLoaded} from '../posts/slice';

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
	return [200, data];
});

export const fetchPosts = createAsyncThunk(
	'fetchPosts',
	async (limitAndOffset: {limit: number; offset: number}, {dispatch}) => {
		dispatch(setPostsLoaded(false));
		try {
			const query = queryString.stringify(limitAndOffset);
			const {data} = await api.get(`/posts?${query}`);
			dispatch(setPosts(data));
		} catch (e) {
			dispatch(setPostsError('Some Error Happened'));
		} finally {
			dispatch(setPostsLoaded(false));
		}
	}
);
