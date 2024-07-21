import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import appSlice from './appSlice'
import searchSlice from './searchSlice';
const store =  configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
    }
});

export default store;
