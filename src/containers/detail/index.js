import React from "react";
import {Base64} from "js-base64";

import config from "../../config/";
import App from "../../components/App";
import Header from "../../components/header/";

class Detail extends React.Component{

    constructor(props){
        super(props);

        this.state={};
    }
    
    componentWillMount(){
        fetch(config.api+config.detail_api+this.props.match.params.id).then(resp=>{
            return resp.json();
        }).then(json=>{
            if(json.code===0){
                this.setState({data:json.data,loaded:true});
            }
            else{
               this.setState({"msg":json.msg,loaded:true});
            }
        
        });
    }

    onClick=()=>{
       this.props.history.goBack();
    }

    getContent(data){        
        return (
            <div className="empty-loading detail">
                <img className="w100 db" src={data.litpic.startsWith("http")?data.litpic:config.api+data.litpic} />
                <span className="hot-icon">{data.cate_name}</span>
                <h4 className="tc detail-tit">{data.title}</h4>
                <div className="c3 detail-subtit">
                    <span>{data.cate_price}K币</span>
                    <span>阅读：{data.click}</span>
                </div>
                <div className="c2 f1s detail-con" dangerouslySetInnerHTML={{__html: Base64.decode(data.content)}}></div>
            </div>
        );
    }

    getMsg(msg){
      return (
         <div className="empty-loading detail"></div>
       )
    }

    render(){
        let content=this.state.loaded?this.state.data?this.getContent(this.state.data):this.getMsg(this.state.msg):this.getMsg(null);
        return (
            <App {...this.props}>
                <Header title="详情" backClick={this.onClick} />
                {content}
            </App>
        )
    }
}

export default Detail;