import {fromJS} from 'immutable';
import * as contants from './actionCreatorType';
const defaultStore = fromJS({
    topicList:[],
    articleList:[],
    hotTag:[],
    articlePage:1,
    showScroll:false
});

const getHomeData = (state,action) =>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        hotTag:fromJS(action.hotTag)
    });
};
const getMoreData = (state,action) =>{
    return  state.merge({
        articleList:state.get('articleList').concat(fromJS(action.articleList)),
        articlePage: action.articlePage
    });
};


export default (state = defaultStore, action) =>{
    switch (action.type) {
        case contants.GET_HOME_DATA:
            return getHomeData(state,action);
        case contants.GET_MORE_DATA:
            return getMoreData(state,action);
        case contants.CHANGE_SCROLL_SHOW:
            return state.set('showScroll',action.showScroll);
        default :
            return state;
    }
}