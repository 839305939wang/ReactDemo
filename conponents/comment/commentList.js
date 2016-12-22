/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import ReactDOM from "react-dom";
class commentList extends React.Component{
    render(){
         return <div id="commentList" className="list-group">
                         {this.props.children||"暂时没有评论!快来参见影评吧"}
                  </div>
    }
}

export { commentList as default}