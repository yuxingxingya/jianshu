import style from 'styled-components';

export const DetailWrapper = style.div`
    width:620px;
    margin:0 auto;
    padding-bottom:100px;
    overflow:hidden;
`;
export const DetailTitle = style.h1`
   word-break:break-word;
   margin:50px 0 20px 0;
   font-size: 34px;
   font-weight: 700;
   line-height: 1.3;
`;
export const Content = style.div`
   p{
        color:#2f2f2f;
        word-break:break-word;
        margin-bottom:25px;
        font-size: 16px;
        line-height: 1.7;
    }
    img{
        width:100%;
        cursor: zoom-in;
        margin:20px 0;    
    }
    b{
        font-weight:bold;
    }
`;

