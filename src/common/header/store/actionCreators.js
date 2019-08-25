import * as constants from './actionCreatorsType';
import axios from 'axios';
import {fromJS} from 'immutable';

const getChangeList = (data) =>({
    type: constants.GET_LIST,
    list:fromJS(data),
    totalPage:Math.ceil(data.length/10)
});

export const getInputFocus = () =>({
    type:constants.INPUT_FOCUS
});
export const getInputBlur = () =>({
    type:constants.INPUT_BLUR
});
export const getMouseIn = () =>({
    type: constants.MOUSE_IN
});
export const getMouseOut = () =>({
    type: constants.MOUSE_OUT
});
export const getClickChange = () =>({
    type: constants.CLICK_CHANGE
});

export const getList = () =>{
    return (dispatch) =>{
        axios.get('api/headerList.json')
            .then((res)=>{
                dispatch(getChangeList(res.data.data))
            })
            .catch((e) =>{
                console.log("error");
            })
    }
};