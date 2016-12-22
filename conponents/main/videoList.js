/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import ReactDOM from "react-dom";
export default  class videoList extends React.Component{
   constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="" id="vedioList">
               {
                    this.props.children.map(item=>{
                        console.log(item)
                        return item;
                    })
                }
            </div>
        );
    }
}
/*
export { videoList as default }*/
