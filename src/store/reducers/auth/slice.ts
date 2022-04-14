import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type sliceType = {
	isAuth: boolean;
	authInfoLoaded: boolean;
};

const initialState: sliceType = {
	isAuth: false,
	authInfoLoaded: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth(state, action: PayloadAction<sliceType['isAuth']>) {
			state.isAuth = action.payload;
		},
		setAuthInfoLoaded(
			state,
			action: PayloadAction<sliceType['authInfoLoaded']>
		) {
			state.authInfoLoaded = action.payload;
		},
	},
});

export const {setAuth, setAuthInfoLoaded} = authSlice.actions;

export default authSlice.reducer;
