/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import ReactDOM from "react-dom";
class CommentForm extends React.Component{
    constructor(props){
        super(props);
    }
    comment(){
        console.log("评论成功");
    }
    render(){
          return (<div>
                        <div className="input-group" style={{postion:"fixed",bottom:"1px"}}>
                            {this.props.children}
                        </div>
                    </div>);
    }
}
export { CommentForm as default}