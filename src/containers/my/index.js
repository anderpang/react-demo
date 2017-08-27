import React from "react";
import App from "../../components/App";

import avatar from "./logo.svg";
import Header from "../../components/header";

class My extends React.Component{
    onClick=()=>{
       this.props.history.goBack();
    }

    render(){
        return (
          <App {...this.props}>
              <Header title="我的" backClick={this.onClick} />
              <div className="my-con tc">
                  <img className="db" src={avatar} alt="" />
                  <p className="c3">我的页面！</p>
              </div>
          </App>
        )
    }
}

export default My;