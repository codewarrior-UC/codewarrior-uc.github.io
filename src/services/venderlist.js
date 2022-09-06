import React from 'react'
import AdminService from "./AdminService";

export default class EmployeeList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      venderlist : [],
    
    }
  }

  componentDidCatch(error, errorInfo) {
   
  };

  componentDidMount()
  {
    AdminService.venderlist()
    .then(response=>response.json())
    
     
     .then(data =>{this.setState({ 'venderlist':data.data.result})
     
    });
   }


  render()
  {
    return(<div>
       <section className="section about-me" data-section="section1">
    <div className="container">
      <div className="section-heading">
        <h2>EmployeeList List</h2>
        <div className="line-dec"></div>       
      </div>  
      <table className='table'>
        <thead> 
           <tr>
            <th>S. No.</th>
            <th>First Name</th>
            <th>Middile Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>DOB</th>
            <th>Aniversary Date</th>
            <th>Joining Date</th>
            <th>Father Mother Name</th>
            <th>Employee Type</th>
          </tr> 
         </thead> 
        <tbody>
          {this.state.venderlist.map((emp,index)=>{
            console.log('venderlist')  
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{emp.first_name}</td>
                <td>{emp.middle_name}</td>
                <td>{emp.last_name}</td>
                <td>{emp.email}</td>
                <td>{emp.mobile_number}</td>
                <td>{emp.dob}</td>
                <td>{emp.aniversary_date}</td>
                <td>{emp.joining_date}</td>
                <td>{emp.father_mother_name}</td>
                <td>{emp.employee_type}</td>    
            </tr>
          })}
         </tbody> 
      </table>    
    </div>
  </section>
  </div>);
  }
}
























