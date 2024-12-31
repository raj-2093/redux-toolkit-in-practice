import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLeftNavOpen: true
};

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        toggleLeftNav(state, action) {
            if(action.payload == null)
                state.isLeftNavOpen = !state.isLeftNavOpen
            else
                state.isLeftNavOpen = action.payload
        }
    }
})

export const {toggleLeftNav} = generalSlice.actions;
export default generalSlice.reducer;