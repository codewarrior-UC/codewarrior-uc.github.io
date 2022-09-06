import React, { Component } from 'react';
import { FilteringTable } from "./components/FilteringTable"
import EmployeeList from './EmployeeList';
// import API from "../src/utils/API"
import AdminService from './services/AdminService';


class App extends Component {
  state = {
    users: [],
    employeelist:[]
   }
      componentDidMount() {
        AdminService.employeeslist()
        .then(({data:{results}})=> 
           {
            let users = results.map(user => {
              return {
                id: user.id.value || "N/A",
                first_name: user.name.first,
                last_name: user.name.last,
                date_of_birth: user.dob.date,
                email: user.email,
                phone: user.phone,
              }
            })
            this.setState({users})
          })
        }
  render() {

  return (
    <div className = "main">
      <EmployeeList/>
      <FilteringTable 
      data = {this.state.users} />
    </div>
  );
  }
}
export default App;
