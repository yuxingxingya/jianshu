import * as contants from './actionCreatorType';
import axios from "axios";

const homeData = (result) =>({
    type:contants.GET_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    hotTag:result.hotTag
});

export const getHomeData = ()=>{
    return (dispatch) => {
        axios.get('/api/home.json').then((res) =>{
            dispatch(homeData(res.data.data));
        });
    }
};

const moreData = (result,articlePage) =>({
    type: contants.GET_MORE_DATA,
    articleList: result.articleList,
    articlePage:articlePage
});
export const getMoreList = (articlePage)=>{
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+articlePage).then((res) =>{
            dispatch(moreData(res.data.data,articlePage+1));
        })
    }
};
export const changeScrollShow = (showScroll) =>({
    type:contants.CHANGE_SCROLL_SHOW,
    showScroll: showScroll
});