import React from "react";

class Header extends React.Component{

    render(){
        return (
            <header className="header">
                <div className="cf pf header-inner">
                    <i className="m back-btn" onClick={this.props.backClick}></i>
                    <span className="header-tit">
                        {this.props.title}
                    </span>
                </div>
            </header>
        )
    }
}

export default Header;