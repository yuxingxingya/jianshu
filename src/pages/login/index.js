import React,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Title} from './style';
import { actionCreators } from './store';

class Login extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <div className="titleContent">
                            <Title>登录</Title>
                        </div>
                        <Input placeholder="你的昵称" type="text" innerRef={(input) =>{this.account=input}}/>
                        <Input placeholder="密码" type="password" innerRef={(input) =>{this.password=input}}/>
                        <button className="btn" onClick={()=>this.props.login(this.account,this.password)}>登录</button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }

    }
}
const initMapStateToProps = (state) =>{
  return{
      loginStatus:state.getIn(['login','login'])
  }
};
const initMapDispatchToProps = (dispatch) =>{
    return {
        login(account,password){
            dispatch(actionCreators.login(account,password))
        }
    }
};
export default connect(initMapStateToProps,initMapDispatchToProps)(Login) ;