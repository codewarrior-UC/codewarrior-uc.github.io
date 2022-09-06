import React from 'react'
import AdminService from "./services/AdminService";
// import CreateAdmin from "./services/CreateAdmin"
import Menu from './Menu';

export default class adminlist extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      adminlist : []
    }
  }

  componentDidMount()
  {
    AdminService.adminlist()
    .then(response=>response.json())

    .then(data =>{this.setState({ 'adminlist':data.data.result})
    // .then(data=>{
    //   if(data.status){
    //     this.setState({adminlist:data.records})
    //   }
     });
  }



  render()
  {
    return <section className="section about-me" data-section="section1">
      <Menu/>
    <div className="container">
      <div className="section-heading">
        <h2>Admin Management</h2>
        <div className="line-dec"></div>       
      </div> 
          <br/><br/>
    

      <table className='table'>
        <thead>
          <tr>
          {/* <th>S. No.</th> */}
            <th>First Name</th>
            {/* <th>Middile Name</th> */}
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            {/* <th>DOB</th>
            <th>Aniversary Date</th>
            <th>Joining Date</th>
            <th>Father Mother Name</th>
            <th>Employee Type</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.adminlist.map((emp,index)=>{
            return <tr key={index}>
   
                <td>{emp.first_name}</td>
                {/* <td>{emp.middle_name}</td> */}
          
                <td>{emp.last_name}</td>
                <td>{emp.email}</td>
                <td>{emp.mobile_number}</td>
                {/* <td>{emp.dob}</td>
                <td>{emp.aniversary_date}</td>
                <td>{emp.joining_date}</td>
                <td>{emp.father_mother_name}</td>
                <td>{emp.employee_type}</td> */}
               
               
            </tr>
          })}
        </tbody>
      </table>    
    </div>
  </section>
  }
}
