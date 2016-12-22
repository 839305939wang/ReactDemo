/**
 * Created by yrhu on 2016/12/20.
 */
import React from "react";
import {Link} from "react-router";

class Comments extends React.Component{

    render(){
        return <div className="media list-group-item" style={{margin:"2px"}}>
                      <a className="pull-left">
                          <img width="50px" height="50px" className="img-circle" src={this.props.path} alt={this.props.alt}/>
                      </a>
                      <div className="media-body">
                          <div className="media-heading">{this.props.name}--<small><em>{'刚刚'}</em></small></div>
                          <div>
                              {this.props.children}
                          </div>
                      </div>
                </div>
    }
}
export { Comments as default};