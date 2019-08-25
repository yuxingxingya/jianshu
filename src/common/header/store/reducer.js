import * as constants from './actionCreatorsType';
import {fromJS} from 'immutable';

const defaultStore = fromJS({
    focused: false,
    mouseIn:false,
    list: [],
    page:1,
    totalPage:1
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.INPUT_FOCUS:
            return state.set('focused', true);
        case constants.INPUT_BLUR:
            return state.set('focused', false);
        case constants.MOUSE_IN:
            return state.set('mouseIn', true);
        case constants.MOUSE_OUT:
            return state.set('mouseIn', false);
        case constants.CLICK_CHANGE:
            return state.set('page', state.get('page')+1 > state.get('totalPage') ? 1 : state.get('page')+1);
        case constants.GET_LIST:
            return state.merge({
                list:action.list,
                totalPage:action.totalPage
            });

        default :
            return state;
    }

}