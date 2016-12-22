/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import ReactDOM from "react-dom";
import CommentList from "./commentList";
 class CommentBox extends React.Component{
     render(){
      /*console.log("----------------------------------");
         var list = this.props.children;
         var arr=[];
         if(list){
             list.forEach(function(e){
                 arr.push(<comments path={e.path} alt={e.alt}>{e.msg}</comments>)
             })
         }*/
        return (
                     <div id="commentBox">
                         <CommentList>
                             {this.props.children}
                         </CommentList>
                   </div>
                   );
      return <div>123</div>
    }
}
export { CommentBox as default}