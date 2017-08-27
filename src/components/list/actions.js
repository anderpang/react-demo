import config from "../../config/";

const actions={
    list_loading:function(state,action){
         return {...state,http_state:"LOADING",cate_id:action.cate_id};
    },

    list_loaded:function(state,action){
         return {...state,http_state:"LOADED"};
    },

    list_ok:function(state,action){
        var data=action.data,
            items=state.items.concat(data.dataList),
            total=data.total,
            offset=data.dataList.length+state.offset;

        return {...state,items,total,offset,http_state:"LOADED"};
    },

    list_fail:function(state,action){
       return {...state,msg:action.msg,http_state:"FAIL"};
    },

    list_change:function(state,action){
       return {...state,items:[],http_state:"LOADED",offset:0,total:1};
    },
    
    fetchList:function(dispatch,id,offset){
        dispatch({type:"list_loading",cate_id:id});

        fetch(config.api+config.list_api.replace("{0}",id).replace("{1}",offset)).then(resp=>{
             
             return resp.json();
        }).then(json=>{
            if(json.code===0){
                dispatch({type:"list_ok",data:json.data});
            }
            else
            {
                dispatch({type:"list_fail",msg:json.msg});
            }
        });
    },
    //更换频道
    changeList:function(dispatch,id){
        dispatch({type:"list_change"});
        this.fetchList(dispatch,id,0);
    }
};

export default actions;