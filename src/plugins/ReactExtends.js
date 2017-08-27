import React from "react";

React.Component.prototype.getJSON=function(url,callback){
    var xhr=new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload=function(){
        callback&&callback(JSON.parse(this.responseText));
    };
    xhr.send(null);
};