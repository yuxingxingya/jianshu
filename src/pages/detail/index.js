import React,{PureComponent} from 'react';
import {DetailWrapper,DetailTitle,Content} from './style';
import {connect} from 'react-redux';
import { actionCreators } from './store';

class Detail extends PureComponent{

    render(){
        const {title,content} = this.props;
        return (
            <DetailWrapper>
                <DetailTitle>{title}</DetailTitle>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getContent(this.props.match.params.id);
    }
}
const initMapStateToProps = (state)=>{
    return {
        title: state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
};
const initMapDispatchToProps = (dispatch) =>{
    return {
        getContent(id){
            dispatch(actionCreators.getDetailContent(id))
        }
    }
};
export default connect(initMapStateToProps,initMapDispatchToProps)(Detail) ;