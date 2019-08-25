import * as actionCreatorType from './actionCreatorType';
import axios from 'axios';

const setLoginStatus = ()=>({
    type:actionCreatorType.SET_LOGIN_STATUS,
    login: true
});
export const logout = () =>({
    type:actionCreatorType.LOGOUT,
    login:false
});

export const login = (account, password) =>{
  return (dispatch) =>{
      axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
          if(res.data.data){
              dispatch(setLoginStatus())
          }else {
              alert("登录失败！")
          }

      })
  }
};
