import config from "../../config";
import {actions as listActions} from "../list/";

const actions={
    menu_ok:function(state,action){
        return Array.isArray(action.data)?{...state,items:action.data}:state;
    },
    set_menu_id:function(state,action){
        return {...state,id:action.id};
    },
    fetchMenu:function(dispatch,cate_id){
        fetch(config.api+config.menu_api).then(resp=>{
            return resp.json();
        }).then(json=>{
            if(json.code===0){
                dispatch({type:"menu_ok",data:json.data});

                //触发获取列表数据
                if(!cate_id){
                   cate_id=json.data[0].id;
                }
                this.triggerList(dispatch,cate_id);
            }
        });
    },
    //触发列表数据
    triggerList:function(dispatch,cate_id){
        listActions.changeList(dispatch,cate_id);
    }
};

export default actions;