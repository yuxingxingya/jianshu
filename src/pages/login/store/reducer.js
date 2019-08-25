import {fromJS} from 'immutable';
import * as contants from './actionCreatorType';
const defaultStore = fromJS({
    login:false
});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        case contants.SET_LOGIN_STATUS:
            return state.set('login',action.login);
        case contants.LOGOUT:
            return state.set('login',action.login);
        default :
            return state;
    }
}