import config from "../../config/";
const actions={
    "banner_ok":function(state,action){
       return Array.isArray(action.data)?action.data:state;
    },
    fetchBanner:function(dispatch){
        fetch(config.api+config.banner_api).then(function(resp){
            return resp.json();
        }).then(function(json){
             if(json.code===0){
                 dispatch({type:"banner_ok",data:json.data});
             }
        });
    }
}

export default actions;