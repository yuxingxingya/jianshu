import React, {Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight,BackTop} from './style';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators'

class Home extends Component {
    render() {
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="bannerImg"
                         alt="图片"
                         src="https://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={this.handleScrollTop}>顶</BackTop>:null
                }

            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.getHomeDataList();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener("scroll",this.props.changeScrollTopShow);
    }

    handleScrollTop(){
        window.scrollTo(0,0);
    }
}
const initMapStateToProps = (state) =>{
    return ({
        showScroll:state.getIn(['home','showScroll'])
    })
};

const initMapDispatchToProps =(dispatch) =>{
  return {
      getHomeDataList(){
          dispatch(actionCreators.getHomeData());
      },
      changeScrollTopShow(){
          if(document.documentElement.scrollTop>150){
              dispatch(actionCreators.changeScrollShow(true))
          }else{
              dispatch(actionCreators.changeScrollShow(false))
          }

      }
  }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Home) ;