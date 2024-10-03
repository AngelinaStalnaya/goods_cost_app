import {configureStore,} from '@reduxjs/toolkit';
import calculationReducer from './calculations/calculationsSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
    reducer: {
        calculation: calculationReducer,
        user: userReducer,
    },

}); 

export const AppSelector = store.getState();
export const AppDispatch = store.dispatch;