import React,{PureComponent,Fragment} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';

class List extends PureComponent{

    render(){
        const {articleList,getMoreList,articlePage} = this.props;
        return (
            <Fragment>
                {
                    articleList.map((item,index)=>(
                        <Link key={index} to={'/detail/'+item.get('id')}>
                            <ListItem>
                                <img className="img" src={item.get('imgUrl')} alt="图片"/>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={()=>getMoreList(articlePage)}>更多文字</LoadMore>
            </Fragment>
        )
    }
}
const initMapStateToProps = (state)=>{
  return {
      articleList:state.getIn(['home','articleList']),
      articlePage:state.getIn(['home','articlePage'])
  }
};
const initMapDispatchToProps = (dispatch)=>{
    return {
        getMoreList(articlePage){
            dispatch(actionCreators.getMoreList(articlePage))
        }
    }
};
export default connect(initMapStateToProps,initMapDispatchToProps)(List) ;