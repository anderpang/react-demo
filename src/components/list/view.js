import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import actions from "./actions";
import config from "../../config/";

class List extends React.Component{

    componentDidMount(){
         window.addEventListener("scroll",this.scrollEnd,false);
    }

    componentWillUnmount(){    
        window.removeEventListener("scroll",this.scrollEnd,false);
    }

    scrollEnd=(e)=>{
        var data=this.props.data;
       if(data.offset<data.total&&
          data.http_state!=="LOADING"&&
          window.scrollY>document.body.scrollHeight-window.innerHeight-5){
          this.props.fetchList(data.cate_id,data.offset);
       }
    }

    render(){
        var items,data=this.props.data,loading;

        if(data.http_state==="FAIL"){
            items=(<li className="list-error">{data.msg||"加载失败"}</li>);
        }
        else
        {
            items=data.items.map(function(item,i){
                 return (<li key={i} className="list-item">
                              <Link to={"/detail/"+item.id} className="cf pr db list-link">
                                 <i className="l m" style={{backgroundImage:"url('"+(item.litpic.startsWith("http")?item.litpic:config.api+item.litpic)+"')"}}></i>
                                 <div className="r list-con">                                
                                     <h4 className="e list-tit">{item.title}</h4>
                                     <div className="cf pa c3 list-fot">
                                         <span className="l">{item.cate_name}</span>
                                         <span className="l">{item.cate_price}K币</span>
                                         <span className="l">阅读：{item.click}</span>
                                     </div>
                                 </div>
                              </Link>
                        </li>);
            });
        }

        loading=data.offset<data.total?(<div className="loading loading2"></div>):(<div className="no-more">无更多</div>);

        return (
            <div className="list-wrap">
                <ul className="list">
                    {items}
                </ul>
                {loading}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data:state.list
    };
}

function mapDispatchToProps(dispatch){
    return {
        fetchList:function(cate_id,offset){
            actions.fetchList(dispatch,cate_id,offset);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);