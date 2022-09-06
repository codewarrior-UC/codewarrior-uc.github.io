import React, { Component } from "react";
import AdminService from "./services/AdminService";
import './Dropdown.css'
export class Ddlcompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeslist: [],
    };
  }
  componentDidCatch(error, errorInfo) {
  }
  componentDidMount() {
    AdminService.employeerlist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ employeeslist: data.data.result });
        console.log("data", data);
      });
  }
  handleChange = (event) => {
    console.log("event.target.ddlCompanyId", event.target.value);
    this.props.parentCallback(event.target.value);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <select
        className="dropdownContent"
          onChange={this.handleChange}
        id="ddlCompany"
        name="ddlCompany"
      >       
          <option value="Please Select Company" className="optionsdrop">Please Select Company</option>
          {this.state.employeeslist.map((emp,index) => {
            return <option className="optionsdrop" value={emp.company_id}>{emp.company_name}</option>;
          })}
        </select>
      </div>
    );
  }
}
export default Ddlcompany;
