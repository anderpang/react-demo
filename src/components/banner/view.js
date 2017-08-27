import React from "react";
import {connect} from "react-redux";
import actions from "./actions";

import 'antd/lib/carousel/style/index.css';
import Carousel from "antd/lib/carousel";

class Banner extends React.Component{
    componentWillMount(){    
        this.props.fetchBanner();
    }
    
    render(){

        var data=this.props.banner;
        if(data.length===0){
            return (<div className="empty-loading ant-carousel"></div>);
        }

        var items=data.map(function(item,i){
            return (<div key={i}><a href={item.url} title={item.title}><img className="w100" src={item.pic} alt="" /></a></div>);
        })
        return (
             <Carousel autoplay>
                {items}
            </Carousel>
        )
    }
}

function mapStateToProps(state){
    return {
        banner:state.banner
    };
}

function mapDispatchToProps(dispatch){
    return {
        fetchBanner:function(){
            actions.fetchBanner(dispatch);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Banner);