import React from 'react'
import AdminService from "./services/AdminService";
import Menu from './Menu'
export default class CompanyList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      companylists : [],
    
    }
  }




  componentDidCatch(error, errorInfo) {
   
  }

  componentDidMount()
  {
    AdminService.companyname()
    .then(response=>response.json())
   
     .then(data =>{this.setState({ 'companylists':data.data})
     
      
  
      
    });
   }



// componentDidUpdate(){
//   console.log(this.state.employeelist)
// }

  
  render()
  {
    return(<div>
       <section className="section about-me" data-section="section1">
        <Menu/>
    <div className="container">
      <div className="section-heading">
        <h2>Company List</h2>
        <div className="line-dec"></div>       
      </div>  
      <table className='table'>
        <thead> 
           <tr>
            <th>S. No.</th>
            <th>ID</th>
            <th>Company ID</th>
            <th>Company Name</th>
          </tr> 
         </thead> 
        <tbody>
          {this.state.companylists.map((emp,index)=>{
            console.log('companylists')  
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{emp._id}</td>
                <td>{emp.company_id}</td>
                <td>{emp.company_name}</td>
              
            </tr>
          })}
         </tbody> 
      </table>    
    </div>
  </section>
  </div>);
  }
}