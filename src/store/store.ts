// Import Redux
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Import Reducers

const reducerSlice = createSlice({
	name: "store",
	initialState: {},
	reducers: {
		someAction: function () {},
	},
});

export const store = configureStore({
	reducer: { someReducer: reducerSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
