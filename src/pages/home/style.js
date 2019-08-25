import style from 'styled-components';

export const HomeWrapper = style.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft = style.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .bannerImg{
        width:625px;
        height:270px;
    }
`;
export const TopicWrapper = style.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
`;
export const TopicItem = style.div`
    float:left;
    background:#f7f7f7;
    line-height:32px;
    height:32px;
    font-size:14px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    color:black;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:10px;
    .topic-img{
        width:32px;
        height:32px;
        float:left;
        margin-right:10px;
    }
`;
export const ListItem = style.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .img{
        width:125px;
        height:100px;
        float:right;
        border-radius:5px;
    }
`;
export const ListInfo = style.div`
    float:left;
    width:480px;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        color:#999;
        font-size:13px;
    }
`;

export const HomeRight = style.div`
    width:280px;
    float:right;
    padding-top:30px;
`;
export const RecommendWrapper = style.div`
    width:280px;
    height:228px;
    overflow:hidden;
    margin-bottom:20px;
`;
export const RecommendItem = style.a`
    display:inline-block;
    cursor: pointer;
    .img{
        width:100%;
        height:50px;
        margin-bottom:6px;
        border-radius:4px;
        display:inline-block
    }
`;
export const WriterWrapper = style.div`
    width:280px;
    height:560px;
    overflow:hidden;
    .spin{
        float:right;
        font-size:14px;
    }
`;
export const WriterTitle = style.div`
    width:280px;
    height:19px;
    color:#969696;
    font-size:14px;
    overflow:hidden;
`;
export const WriterSwitch = style.div`
    float:right;
`;
export const WriterItem = style.div`
    width:280px;
    height:47px;
    overflow:hidden;
    margin-top:15px;
    cursor:pointer;
    .headImg{
        float:left;
        width:48px;
        height:48px;
        margin-right:10px;
        border-radius:50%;
    }
    .watch{
       float:right; 
       display:inline-block;
       width:40px;
       color:#42c02e;
       font-size:13px;
    }
    .desc{
        font-size: 12px;
        color: #969696;
    }
`;
export const WriterInfo = style.div`
    width:220px;
    float:left;
    padding-top:5px;
    font-size:14px;
    color:#333;
    margin-bottom:8px;
`;
export const LoadMore = style.div`
    width:100%；
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    color:#fff;
    border-radius:20px;
    margin:30px 0;
    cursor:pointer;
`;
export const BackTop = style.div`
    width:60px;
    height:60px;
    text-align:center;
    line-height:60px;
    position:fixed;
    bottom: 60px;
    right:60px;
    border: 1px solid #ccc; 
`;
