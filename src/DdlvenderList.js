import React, { Component } from "react";
import AdminService from "./services/AdminService";
import "./modal.css";

export class DdlvenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ddlvenderlist: [],
    };
  }
  componentDidCatch(error, errorInfo) {
   // console.log("error--", error);
  }

  componentDidMount() {
    AdminService.ddlvenderlist()
      .then((response) => response.json())

      .then((data) => {
        this.setState({ ddlvenderlist: data.data });
        //console.log("data", data);
      });
  }
  handleChange = (event) => {
    console.log("event.target.ddlVender",event.target.value);
    this.props.parentCallback(event.target.value);
    event.preventDefault();
  };

  
  render() {
    return (
      <select
        onChange={this.handleChange}
        id="ddlVender"
        name="ddlVender"
        ref={(c) => (this.ddlVender1box = c)}
      >
        <option value="0">Please Select</option>
        {this.state.ddlvenderlist.map((emp, index) => {
          return (
            <option value={emp._id}>
              {emp.full_name}-&nbsp; {emp._id}
            </option>
          );
        })}{" "}
        <br /> <br />
      </select>
    );
  }
}

export default DdlvenderList;
