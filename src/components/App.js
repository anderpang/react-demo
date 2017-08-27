import React from "react";
import "babel-polyfill";
import Footer from "./footer";

class App extends React.Component{
    render(){
        return (
            <div className="app">            
                {this.props.children}
                <Footer pathname={this.props.location.pathname} />
            </div>
        )
    }
}

export default App;