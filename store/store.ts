// Import Redux
import { configureStore } from "@reduxjs/toolkit";

// Import Reducers
import currentPostReducer from "./reducers/currentPostReducer";

export const store = configureStore({
	reducer: { currentPostReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
