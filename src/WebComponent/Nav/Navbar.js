import React from 'react'
import { Link, Navigate } from 'react-router-dom'

// import Store  from './reduxdata/Store'
import {connect} from 'react-redux'
import Store  from '../../reduxdata/Store'
// import { ACTION_LOGOUT } from './reduxdata/actions/UserAction'
import { ACTION_LOGOUT } from '../../reduxdata/actions/UserAction'

var mapStateToProps = (state)=>{ 
  return {
      loginstatus : state.loginstatus,
      // userName : state.studentName
  }
}

class Navbar extends React.Component
{

  constructor(){
    super()
    this.state = {
           islogout : false
    }
  }
  
  logout = ()=>{
    Store.dispatch({
      ...ACTION_LOGOUT
    })
    //this.setState({islogout:true})
  }
  render()
  {
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
          {/* <h4>
          {this.props.loginstatus?this.props.userName:"BIPS College"}</h4> */}
          <span>Flair IT Sol</span>
        </div>
        <nav className="main-nav" role="navigation">
          {this.state.loginstatus?<ul className="main-menu">
              {/* <li><Link to="/students">Student List</Link></li>      
              <li><b onClick={this.logout}>Logout</b></li>  
              */}
            
          </ul>:
          <ul className="main-menu">
            <li><Link to="/home">Employee Management</Link></li>    
             <li><Link to="/Events">Events</Link></li>  
            <li><Link to="/OrderLists">Order Managements</Link></li>      
             <li><Link to="/Perks">Gift Select</Link></li>  

            </ul>}

        </nav>
     
        {/* <div className="copyright-text">
          <p>Copyright 2019 Reflux Design</p>
        </div> */}
      </div>
    </div>
  </div>

  }
}

export default connect(mapStateToProps)(Navbar)