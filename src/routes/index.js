import React from "react";
import {HashRouter,Route} from "react-router-dom";

import {Home,Detail,My} from '../containers/';

function Routes(){
   return (
       <HashRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/tab/:id" component={Home}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
                <Route path="/my" component={My}></Route>
            </div>
        </HashRouter>
   )
}
export default Routes;