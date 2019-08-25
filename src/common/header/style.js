import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height:56px;
    width:100%;
    border-bottom: 1px solid #f0f0f0;
    display:inline-block
`;
export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
    cursor: pointer;
`;
export const Nav = styled.div`
    width:960px;
    height:56px;
    margin:0 auto;
    padding-right:50px;
    box-sizing:border-box;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    cursor: pointer;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    .iconfont{
        font-size:24px;
    }
    &.searchWrapper{
        position:relative;
        .searchIcon{
            display:inline-block;
            float:left;
            width:30px;
            height:30px;
            border-radius:50%;
            text-align:center;
            line-height:30px;
           font-size:17px;
           margin-left:-33px;
           margin-top:12px;
           &.focused{
               background:#969696;
               color:#fff;
           }
        }
    }
    
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    float:left;
    width:160px;
    height:36px;
    border: 1px solid #eee;
    border-radius:40px;
    font-size:14px;
    background:#eee;
    padding:0 40px 0 20px;
    margin-top:9px;
    box-sizing:border-box;
    outline:none;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:200px;
    }
    &.solid-enter{
        width:160px;
        transition: all .3s ease-out;
    }
    &.solid-enter-active{
        width:200px;
    }
    &.solid-exit{
        width:200px;
        transition: all .3s ease-out;
    }
    &.solid-exit-active{
        width:160px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    top:56px;
    left:15px;
    width:240px;
    wight:100px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding:0 20px;
    background:#fff;
    z-index:100;
`;
export const SearchInfoList = styled.div`
    overflow:hidden;
`;
export const SearchInfoTittle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
    .spin{
        font-size:12px;
        float: right;
        cursor: pointer;
        padding:3px;
        transition:all .3s ease-in;
        transform-origin:center center;
    }
`;

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
`;
export const SearchInfoItem = styled.a`
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    display:inline-block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
`;

export const Addtion = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:20px;
    margin-top:9px;
    border:1px solid rgba(236,97,73,.7);
    font-size:15px;
    text-align:center;
    margin-right:15px;
    cursor: pointer;
    &.reg{
        color:#ea6f5a;
        width:80px;
        background-color: transparent;
    }
    &.writting{
        color:#ffffff;
        width:100px;
        background-color: #ea6f5a;
        
    }
    .iconfont{
        font-size:17px;
        padding-right:5px;
    }
    
`;
