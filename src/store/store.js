"use client"
import { configureStore  } from "@reduxjs/toolkit";
import taskReducer from "./task.slice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, taskReducer)



   
  const store = configureStore({
    reducer: persistedReducer,
    // Any additional configuration options can be added here
  });
  
  const persistor = persistStore(store);
  
  export  { store, persistor };