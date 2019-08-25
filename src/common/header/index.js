import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addtion,
    Button,
    SearchInfo,
    SearchInfoList,
    SearchInfoTittle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {CSSTransition} from 'react-transition-group';

import {actionCreators as loginActionCreators} from '../../pages/login/store'

class Header extends Component {

    render() {
        const {focused, handleInputFocus, handlerInputBlur,list,loginStatus,logout} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载App</NavItem>
                    <NavItem className={'left searchWrapper'}>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="solid"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handlerInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? "iconfont focused searchIcon" : "iconfont searchIcon"}>&#xe614;</span>
                        {
                            this.getListArea()
                        }
                    </NavItem>
                    {
                        loginStatus ?
                            <NavItem className={'right'} onClick={logout}>退出</NavItem> :
                            <Link to="/login"><NavItem className={'right'}>登录</NavItem></Link>
                    }

                    <NavItem className={'right'}>
                        <span className="iconfont ">&#xe636;</span>
                    </NavItem>
                    <Addtion>
                        <Button className={'writting'}>
                            <span className="iconfont">&#xe602;</span>写文章
                        </Button>
                        <Button className={'reg'}>注册</Button>
                    </Addtion>

                </Nav>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const {focused, list, page, mouseIn,handleMouseIn,handleMouseOut,handleClickChange} = this.props;
        const pageList = [];
        const newList = list.toJS();
        if(newList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseIn}
                            onMouseLeave={handleMouseOut}
                >
                    <SearchInfoTittle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleClickChange(this.spinIcon)}>换一批</SearchInfoSwitch>
                        <span className="iconfont spin"
                              ref={(icon) =>{ this.spinIcon = icon}}
                        >&#xe851;</span>
                    </SearchInfoTittle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

const initMapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header','mouseIn']),
        loginStatus:state.getIn(['login','login'])
    }
};
const initMapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if(list.toJS().length === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.getInputFocus());
        },
        handlerInputBlur() {
            dispatch(actionCreators.getInputBlur());
        },
        handleMouseIn(){
            dispatch(actionCreators.getMouseIn());
        },
        handleMouseOut(){
            dispatch(actionCreators.getMouseOut());
        },
        handleClickChange(spinIcon){
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,"");
            if(originAngle){
                originAngle = parseInt(originAngle);
            }
            let angle = originAngle+360;
            spinIcon.style.transform ='rotate('+angle+'deg)';
            dispatch(actionCreators.getClickChange());
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
};


export default connect(initMapStateToProps, initMapDispatchToProps)(Header);