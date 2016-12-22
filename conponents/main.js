/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import VideoList from "./main/videoList";
import $ from "jquery";
import VideoItem from "./main/VedioItem";
import {Link} from "react-router";
 class Main extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             List: null
         }
     }
     getVideoList (){
        var imgs = [{"path":"./imgs/1.jpg","alt":"图片一","desc":"图片一","id":"1","compage":"1"},
                     {"path":"./imgs/2.jpg","alt":"图片二","desc":"图片二","id":"2","compage":"1"},
                     {"path":"./imgs/3.jpg","alt":"图片一","desc":"图片三","id":"3","compage":"2"},
                     {"path":"./imgs/4.jpg","alt":"图片一","desc":"图片四","id":"4","compage":"2"},
                     {"path":"./imgs/5.jpg","alt":"图片一","desc":"图片五","id":"5","compage":"3"},
                     {"path":"./imgs/6.jpg","alt":"图片一","desc":"图片六","id":"6","compage":"3"}
        ];
        this.setState({List:imgs});
        console.log(this.state)
     }
     componentDidMount(){
         console.log("组件已经加载");
         this.getVideoList();
     }
     showComments(){

     }
     render(){
          var id = this.props.params.id;
          console.log("-------"+id+"------");
             var list = [];
            switch(id){
                case "0":
                    if(this.state.List){
                        this.state.List.map(item=>{
                            list.push(<VideoItem path={item.path} alt={item.alt}><Link to={"/commentPage/"+item.id+""}>{item.desc}</Link></VideoItem>)
                        })
                    }else{
                        list.push(<span className="alert alert-warning">数据加载中</span>)
                    }
                    break;
                case "1":
                     list.push(<div className="alert alert-warning">暂时还没有收录电影</div>);
                     break;
                case "2":
                    list.push(<div className="alert alert-warning">暂时还没有收录电视剧</div>);
                     break;
                default :
                    if(this.state.List){
                        this.state.List.map(item=>{
                            list.push(<VideoItem path={item.path} alt={item.alt}><Link to={"/commentPage/"+item.id}>{item.desc}</Link></VideoItem>)
                        })
                    }else{
                        list.push(<span className="alert alert-warning">数据加载中</span>)
                    }
            }
        return (
            <div>
                <VideoList>
                    {list}
                </VideoList>
            </div>
        );
    }
}
export { Main as default};