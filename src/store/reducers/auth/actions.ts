import {createAsyncThunk} from '@reduxjs/toolkit';

import {setAuth, setAuthInfoLoaded} from './slice';

export const getAuthInfo = createAsyncThunk(
	'getAuthInfo',
	async (_, {dispatch}) => {
		try {
			const authData = localStorage.getItem('isAuth');
			authData && dispatch(setAuth(true));
		} catch (e) {
			dispatch(setAuth(false));
		} finally {
			dispatch(setAuthInfoLoaded(true));
		}
	}
);
