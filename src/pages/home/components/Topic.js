import React,{PureComponent} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';

class Topic extends PureComponent{

    render(){
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.toJS().map((item) =>{
                        return (
                            <TopicItem key={item.id}>
                                <img className='topic-img' src={item.imgUrl} alt='图片'/>
                                {item.title}
                            </TopicItem>
                        )
                    })
                }

            </TopicWrapper>
        )
    }
}

const initMapStateToProps = (state)=>{
    return{
        topicList: state.getIn(['home','topicList'])
    }
};

export default connect(initMapStateToProps,null)(Topic) ;