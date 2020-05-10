import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { authentication } from './authentication.reducer'
import { alert } from './alert.reducer';

export default combineReducers({
    router: routerReducer,
    session: sessionReducer,
    authentication,
    alert
});