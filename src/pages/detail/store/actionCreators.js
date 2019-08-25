import axios from 'axios';
import * as actionCreatorType from './actionCreatorType';

const getContentData = (result) =>({
    type: actionCreatorType.GET_CONTENT_DATA,
    content:result.content,
    title:result.title
});

export const getDetailContent = (id)=>{
  return (dispatch) =>{
      axios.get('/api/detail.json?id=' + id).then((res)=>{
          dispatch(getContentData(res.data.data));
      })
  }
};