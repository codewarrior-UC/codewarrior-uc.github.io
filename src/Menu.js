import React from "react";
import { Link, Navigate } from "react-router-dom";
import Store from "./reduxdata/Store";
import { connect } from "react-redux";
import { ACTION_LOGOUT } from "./reduxdata/actions/UserAction";

var mapStateToProps = (state) => {
  const { user_roles } = state;
  return {
    user_roles,
    role_id: state.role_id,
    _id: state._id,
  };
};

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      isrole_id: 1,
      role_id: false,
    };
  }

  logout = () => {
    Store.dispatch({
      ...ACTION_LOGOUT,
    });
    this.setState({ islogout: true });
  };
  render() {
    if (this.state.islogout) return <Navigate to="/Menu" />;
    else
      return (
        <div className="responsive-nav">
          <i className="fa fa-bars" id="menu-toggle"></i>
          <div id="menu" className="menu">
            <i className="fa fa-times" id="menu-close"></i>
            <div className="container">
              <div className="image">
                <a href="/#">
                  <img src="assets/images/banner.jpg" alt="" />
                </a>
              </div>
              <div className="author-content">
                <h4>
                  {this.props.loginstatus
                    ? this.props.userName
                    : "Utkarsh Chourasia"}
                </h4>
                <span>React JS Developer</span>
              </div>
              <nav className="main-nav" role="navigation">
             
                {this.state.role_id === 1 ? (
                  <ul className="main-menu">
                    <li>
                      <Link to="/AdminList">Admin Managment</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="main-menu">
                    <li>
                      <Link to="/AdminList">Admin Managment</Link>
                    </li>
                    <li>
                      <Link to="/VendersList">Venders Managment</Link>
                    </li>
                    <li>
                      <Link to="/EmployeerList">Employer Managment</Link>
                    </li>
                    <li>
                      <Link to="/EmployeeList">Employee Managment</Link>
                    </li>
                    <li>
                      <Link to="/Findjoin">EVENTS</Link>
                    </li>
                    {/* <li>
                     <Link to="/EmpDetail">pagination</Link> 
                    </li> */}
                  </ul>
                )}

                {this.state.role_id === 2 ? (
                  <ul className="main-menu">
                    <li>
                      <Link to="/EmployeeList">EmployeeList</Link>
                    </li>
                    <li>
                      <Link to="/VedList">VedList</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="main-menu"></ul>
                )}
              </nav>
              <div className="copyright-text">
                <p>Copyright 2022 Flair IT Solution PVT Limited</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default connect(mapStateToProps)(Menu);
