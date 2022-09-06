import React from 'react'
import AdminService from "../src/services/AdminService";
export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.company_name}</strong>
 <select
      className="form-control "
      name="{props.company_id}"
     onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
      <option key={index} value={item.id}>
    {item.company_name}
 { console.log('item.company_name',item.company_name)}
        </option>
      ))}
    </select>
  </div>
)

export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      companynames: [],

      value: '',
    }
  }
  componentDidMount() {
    AdminService.companyname()
      .then((response) => response.json())
      .then(data=>{
        this.setState({companynames:data.data})
      })
   }
  onChange = (event) => {
    this.setState({ companynames:this.state.companynames});
 console.log('companyname',this.state.companynames)
   console.log(event.target.value)
    }

 render() {
 return (
      <div className="container">
{/* 
{this.state.companynames.filter(company=>company.company_id===this.state.companynames).map((emp)=>{ 

//  {emp.company_name}

<CustomDropdown 
name={this.state.company_name}
options={this.state.companynames}
 onChange={this.state.onChange}
/>

})} */}


      <CustomDropdown 
          name={this.state.company_name}
          options={this.state.companynames}
          //  onChange={this.state.onChange}

onChange={this.state.companynames.filter(company=>company.company_id==='62d11c6c703628472c681138').map((emp)=>{
  return(
    <td>
    {emp.company_id}
    </td>
    )
})}

        />
      </div>
    )
  }
}
