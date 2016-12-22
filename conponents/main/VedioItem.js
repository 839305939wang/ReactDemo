/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import ReactDOM from "react-dom";

class videoItem extends React.Component{
    constructor(props){
           super(props);
    }
    render(){
        return (
            <figure className="thumbnail" style={{margin:"10px"}}>
                <img src={this.props.path} alt={this.props.alt} />
                <figcaption className="" style={{textAlign:'center'}}>{this.props.children}</figcaption>
            </figure>
        );
    }
}
export { videoItem as default }

