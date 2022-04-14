import {combineReducers, configureStore} from '@reduxjs/toolkit';

import authReducer from './reducers/auth/slice';
import postReducer from './reducers/posts/slice';

const rootReducer = combineReducers({
	auth: authReducer,
	posts: postReducer,
});

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({serializableCheck: false}),
	});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore();
