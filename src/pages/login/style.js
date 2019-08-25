import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position:absolute;
    top:56px;
    left:0;
    bottom:0;
    right:0;
    background:#eee;
`;
export const LoginBox = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    border-radius: 4px 4px 0 0;
    .titleContent{
        height:50px;
        text-align:center;
    }
    .btn{
        width:300px;
        display:block;
        margin:20px auto;
        background: #3194d0;
        color:#fff;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        padding: 9px 18px;
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
    }
`;
export const Title = styled.a`
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    font-size: 18px;
`;

export const Input = styled.input`
    width: 300px;
    height:50px;
    box-sizing: border-box;
    line-height:30px;
    color:#777;
    display:block;
    margin:10px auto;
    font-size:14px
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
`;
