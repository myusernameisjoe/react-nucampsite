import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
});

export const { reducer: userReducer, actions } = userSlice;
export const { setCurrentUser } = actions;
export const selectCurrentUser = state => state.user.currentUser;