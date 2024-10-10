import {configureStore,} from '@reduxjs/toolkit';
import calculationsListReducer from './calculations/calculationsListSlice';
import userReducer from './user/userSlice';
import calculationReducer from './calculations/calculationSlice';


export const store = configureStore({
    reducer: {
        calculationsList: calculationsListReducer,
        user: userReducer,
        calculation: calculationReducer,
    },

}); 

export const AppSelector = store.getState();
export const AppDispatch = store.dispatch;