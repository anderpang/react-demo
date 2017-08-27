import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component{

    constructor(props){
        super(props);
        this.links=[
            {url:"/",text:"首页"},
            {url:"/my",text:"我的"}
        ];
    }

    render(){
        var pathname=this.props.pathname;
        if(pathname.startsWith("/tab/")){
            pathname="/";
        }
        var items=this.links.map(function(lk,i){
            return (<Link key={i} className={"l footer-link"+(lk.url===pathname?" footer-link-act":"")} to={lk.url}>{lk.text}</Link>);
        })
        return (
            <div className="footer-wrap">
                <div className="pf footer">
                    {items}
                </div>
            </div>
        )
    }
}

export default Footer;