import React from "react";
import store from "../../store/";
import App from "../../components/App";
import Menu from "../../components/menu/";
import Banner from "../../components/banner/";
import List from "../../components/list/";

class Home extends React.Component{

    componentWillMount(){
        store.dispatch({type:"set_menu_id",id:this.props.match.params.id||""});
    }

    render(){
        return (
            <App {...this.props}>
                <Menu cate_id={this.props.match.params.id} />
                <Banner />
                <List />
            </App>
        )
    }
}


export default Home;