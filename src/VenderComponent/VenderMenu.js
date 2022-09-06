import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {connect} from 'react-redux'
// import Store  from '../../reduxdata/Store'
// import { ACTION_LOGOUT } from '../../reduxdata/actions/UserAction'

var mapStateToProps = (state)=>{ 
  return {
      loginstatus : state.loginstatus,
  }
}
export class VenderMenu extends Component {
    constructor(){
        super()
        this.state = {
               islogout : false
        }
      }
      // logout = ()=>{
      //   Store.dispatch({
      //     ...ACTION_LOGOUT
      //   })
      // }
  render() {
    if(this.state.islogout)
    return <Navigate to="/"/>
    else  
    return<div className="responsive-nav">
         <i className="fa fa-bars" id="menu-toggle"></i>
    <div id="menu" className="menu">
      <i className="fa fa-times" id="menu-close"></i>
      <div className="container">
        <div className="image">
          <a href="/#"><img src="assets/images/author-image.jpg" alt="" /></a>
        </div>
        <div className="author-content">
          <h4>
          {this.props.loginstatus?this.props.userName:"I am Vender"}</h4>
        </div>
        <nav className="main-nav" role="navigation">
          {this.state.loginstatus?<ul className="main-menu">
          </ul>:
                <ul className="main-menu">
                    
                    <li><Link to="/VenderOrderList">Order Management</Link></li> 

                </ul>}
        </nav>
        <div className="copyright-text">
          <p>Copyright 2022 Flair it sol</p>
        </div>
      </div>
    </div>
      </div>
  }
}
export default connect(mapStateToProps)(VenderMenu)
