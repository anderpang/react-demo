
function reducerFactory(initState,actions){
    return function(state=initState,action){
        var f=actions[action.type];
        return f?f(state,action):state;
    }
}

export default reducerFactory;