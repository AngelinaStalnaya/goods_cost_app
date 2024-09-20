import {configureStore} from 'redux';
import reducer from './reducer';

reducer = (state = 3) => {
    return state;
}

const store = configureStore( reducer);

export default store;


// dispatch
// store.subscribe(function) f.e. addCount to global variable count
// rootReducer = combineReducers({for each page or part of application unique})

// *****

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';

// const authReducer = (state = {authenticated: false}, action) => {
//   switch(action.type) {
//     case LOGIN:
//       return {
//         authenticated: true
//       }
//     case LOGOUT:
//       return {
//         authenticated: false
//       }
//     default:
//       return state;
//   }
// };

// const rootReducer = Redux.combineReducers({
//     auth: authReducer,
//     count: counterReducer,
// })

// const store = Redux.createStore(rootReducer);})



// *****
// Redux Thunk middleware - fot async requests 
// const store = Redux.createStore(
//   asyncDataReducer,
//   Redux.applyMiddleware(ReduxThunk.default)
// );
// f.e.::


// const REQUESTING_DATA = 'REQUESTING_DATA'
// const RECEIVED_DATA = 'RECEIVED_DATA'

// const requestingData = () => { return {type: REQUESTING_DATA} }
// const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

// const handleAsync = () => {
//   return function(dispatch) {
//     dispatch(requestingData())

//     setTimeout(function() {
//       let data = {
//         users: ['Jeff', 'William', 'Alice']
//       }
//       dispatch(receivedData(data))

//     }, 2500);
//   }
// };

// const defaultState = {
//   fetching: false,
//   users: []
// };

// const asyncDataReducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case REQUESTING_DATA:
//       return {
//         fetching: true,
//         users: []
//       }
//     case RECEIVED_DATA:
//       return {
//         fetching: false,
//         users: action.users
//       }
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(
//   asyncDataReducer,
//   Redux.applyMiddleware(ReduxThunk.default)
// );

// ****

// 