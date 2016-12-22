/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "./commentBox";
import Comment from "./comments";
import CommentForm from "./commentForm";
import ReactMixin from "react-mixin";
import Reflux from "reflux";
export default class CommentPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            id:""
        }
    }
   componentWillMount(){
       var arr = [{name:"游客1",path:"./imgs/2.jpg",alt:'游客1',msg:'这部电影特别好看',id:"1"},
            {name:"游客0",path:"./imgs/2.jpg",alt:'游客1',msg:'这部电影特别好看',id:"1"},
            {name:"游客1",path:"./imgs/2.jpg",alt:'游客1',msg:'这部电影特别好看',id:"2"},
            {name:"游客2",path:"./imgs/2.jpg",alt:'游客1',msg:'这部电影特别好看',id:"2"},
            {name:"游客3",path:"./imgs/2.jpg",alt:'游客1',msg:'这部电影特别好看',id:"3"}]
        this.setState({list:arr})
       /*this.getAll();*/
   }
    comment(){
       let msg = this.refs.input.value;
           this.refs.input.value = "";
       let item ={"name":"游客"+this.state.list.length,"path":"./imgs/2.jpg","alt":"游客"+this.state.list.length,"msg":msg,id:this.state.id};
       var newList = this.state.list;
        newList.push(item);
       this.setState({list:newList.reverse()});
    }
    render() {
          let id = this.props.params.id;
          console.log("电影id:"+id);
          this.state.id=id;
          var List = this.state.list.filter(function(e){
              return e.id==id;
          });
          var cms = [];
          for(let i = 0;i<List.length;i++){
              let e = List[i];
              cms.push( <Comment path={e.path} alt={e.alt} name={e.name}>{e.msg}</Comment>)
          }
          return (
             <div id="compage" className="">
                 <CommentBox>
                     {cms}
                 </CommentBox>
                 <CommentForm>
                     <input ref={'input'} className="form-control" placeholder="评论"/>
                      <div className="input-group-btn">
                         <span className="btn btn-default" onClick={this.comment.bind(this)}>提交</span>
                     </div>
                 </CommentForm>
             </div>
          );
    }
}

