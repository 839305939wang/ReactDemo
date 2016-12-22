/**
 * Created by yrhu on 2016/12/21.
 */
import React from "react";
import ReactDOM from "react-dom"
class ErrorPage extends React.Component{
     render(){
         return <div className="" style={{display:"flex",alignItems:"center"}}>
                       <strong>页面加载出现错误</strong>
                  </div>
     }
 }

export { ErrorPage as default}