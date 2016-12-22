import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,hashHistory,IndexRoute} from "react-router";
import First from "./conponents/First";
import Main from "./conponents/main";
import CommentPage from "./conponents/comment/commentpage";
import ErrorPage from "./conponents/error/error"
console.log(ReactDOM.render)
ReactDOM.render(
       <Router history={hashHistory}>
             <Route path="/" component={First}>
                 <IndexRoute component={ Main }/>
                 <Route path="/video/:id" component={Main}/>
                 <Route path="/commentPage/:id" component={CommentPage}/>
             </Route>
        </Router>,
        document.getElementById('app')

       )
