import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import appSlice from './appSlice'

const store =  configureStore({
    reducer:{
        app:appSlice,
    }
});

export default store;
