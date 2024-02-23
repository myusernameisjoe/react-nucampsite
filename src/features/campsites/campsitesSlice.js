import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

// createAsyncThunk
export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites', // string used to identify the action in the Redux DevTools
    async () => { // function that returns a promise
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

// create 3 stateful variables
const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},

    // create 3 extraReducers (pending, fulfilled, rejected) to handle the fetchCampsites action (createAsyncThunk action creator)
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};









// old with selectRandomCampsite placeholder previously used in nucampsite/src/pages/CampsitesDirectoryPage.js
/*

import { CAMPSITES } from '../../app/shared/CAMPSITES.js'

export const selectAllCampsites = () => { // selector function
    return CAMPSITES; // selects and returns entire array of campsites
};

export const selectRandomCampsite = () => { // another selector function
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]; // selects and returns a random campsite
};


// use selector functions to select specific pieces of data

// file is lower case becuase this file does not export a component

// define and export on same line 

// can keep any logic related to state management in the slice file
// becomes a single source of truth for all campsites data

// we can later alter or replace CAMPSITES with a database or API call without having to change any other files in the app

// if we want to select a new portion of the CAMPSTIES array, we can do so in a selector function and then use that selector function in any component that needs that data

// access the data in one place and then use it in multiple places

// if different components need different portions of the data, we can create multiple selector functions to return different portions of the data
*/
