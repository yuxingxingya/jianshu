import {fromJS} from 'immutable';
import * as contants from './actionCreatorType';
const defaultStore = fromJS({
    title:"",
    content:""
});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        case contants.GET_CONTENT_DATA:
            return state.merge({
                title:action.title,
                content:action.content
            });
        default :
            return state;
    }
}