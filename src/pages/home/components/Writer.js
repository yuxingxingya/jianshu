import React,{PureComponent} from 'react';
import {WriterItem, WriterWrapper, WriterTitle, WriterSwitch, WriterInfo} from "../style";
import {connect} from 'react-redux';


class Writer extends PureComponent{

    render(){
        const {handleClickChange} = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch onClick={()=>handleClickChange(this.spinIcon)}>换一批</WriterSwitch>
                    <span className="iconfont spin"
                          ref={(icon) =>{ this.spinIcon = icon}}
                    >&#xe851;</span>
                </WriterTitle>
                <WriterItem>
                    <img className="headImg" src="https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="头像"/>
                    <WriterInfo>
                        简书钻首席小管家
                        <a className="watch" href="javascript;"> + 关注</a>
                    </WriterInfo>
                    <p className="desc">
                        写了181.5k字 · 139.3k喜欢
                    </p>
                </WriterItem>
            </WriterWrapper>
        )
    }
}
const initMapStateToProps = (state) =>{
    return {

    }
};
const initMapDispatchToProps = (dispatch) =>{
    return{
        handleClickChange(spinIcon){

        }
    }
};
export default connect(initMapStateToProps,initMapDispatchToProps)(Writer);