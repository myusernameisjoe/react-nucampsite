import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES.js'

const initialState = {
    campsitesArray: CAMPSITES
};

const campsiteSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsiteSlice.reducer;

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
