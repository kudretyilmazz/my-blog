import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../store";
// Define a type for the slice state
interface CounterState {
	allPosts: any;
}

// Define the initial state using that type
const initialState: CounterState = {
	allPosts: null,
};

export const currentPostReducer = createSlice({
	name: "allPosts",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setAllPosts: (state, action: PayloadAction<any>) => {
			state.allPosts = action.payload;
		},
	},
});

export const { setAllPosts } = currentPostReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const allPosts = (state: RootState) => state.currentPostReducer.allPosts;

export default currentPostReducer.reducer;
