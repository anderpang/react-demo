import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import actions from "./actions";

class Menu extends React.Component{
    componentWillMount(){
        this.props.fetchMenu(this.props.cate_id);
    }
    
    onClick=(e)=>{
        this.props.setCurrentId(e.currentTarget.getAttribute("data-id"));
    }

    render(){
        var list=this.props.data.items,len=list.length,currentId,items,that=this;
        if(len){
           currentId=this.props.data.id||list[0].id;
           items=this.props.data.items.map(function(item){
                return <li onClick={that.onClick} key={item.id} className={currentId===item.id?"menu-item menu-item-on":"menu-item"} data-id={item.id}><Link className="db" to={"/tab/"+item.id}>{item.name}</Link></li>
            });
        }
        else
        {
            items=list;
        }
        return (
          <div className="pr menu-wrap">
              <div className="pf menu-pf">
                <ul className="empty-loading menu" onClick={this.props.onClick}>
                    {items}
                </ul>
              </div>
           </div>
        );
    }
}

function mapStateToProps(state){
    return {
            data:state.menu
    };
}

function mapDispatchToProps(dispatch){
    return {
        fetchMenu:function(cate_id){
           actions.fetchMenu(dispatch,cate_id);
        },
        setCurrentId:function(id){
            dispatch({type:"set_menu_id",id:id});
            actions.triggerList(dispatch,id);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);