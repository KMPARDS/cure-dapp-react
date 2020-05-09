import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

export default combineReducers({
    router: routerReducer,
    session: sessionReducer
});