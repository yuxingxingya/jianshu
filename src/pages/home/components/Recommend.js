import React,{PureComponent} from 'react';
import {RecommendWrapper,RecommendItem} from "../style";
import {connect} from 'react-redux';

class Recommend extends PureComponent{

    render(){
        const {hotTag} = this.props;
        return (
            <RecommendWrapper>
                {
                    hotTag.map((item)=>(
                        <RecommendItem key={item.get('id')}>
                            <img className="img" src={item.get('imgUrl')} alt="图片"/>
                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        )
    }
}
const initMapStateToProps = (state)=>{
    return {
        hotTag:state.getIn(['home','hotTag'])
    }
};
export default connect(initMapStateToProps,null)(Recommend) ;