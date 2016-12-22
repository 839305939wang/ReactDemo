/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import {Link} from "react-router";
import ErrorPage from "./error/error"
/*import "../css/bootstrap.min.css!";*/
class First extends React.Component{
    render(){
        return <div>
                    <ul className="nav nav-tabs">
                        <li className="active"><Link to="/video/0">首页</Link></li>
                        <li> <Link to="/video/1">电影</Link></li>
                        <li> <Link to="/video/2">电视剧</Link></li>
                    </ul>
                    <div>{this.props.children}</div>
                </div>
    }
}
export { First as default};
