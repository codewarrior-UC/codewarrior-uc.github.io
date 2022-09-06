import React, { Component } from 'react'
import AdminService from './services/AdminService';

export class Ddlemployer extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        ddlemployerlist : [],
      }
    }
    handleChange() {
      console.log("handleChange Vender ID--", this.ddlVender1box.value);
  
      this.setState({
        hfVender: this.ddlVenderidbox.value,
      });
    }

    componentDidCatch(error, errorInfo) {
    };

    componentDidMount()
  {
    AdminService.ddlemployerlist()
    .then(response=>response.json())
     
     .then(data =>{this.setState({ 'ddlemployelist':data.data})
     console.log("data",data);
    });
   }
  render() {
    return (
      <>
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">Please Select</option>
             {this.state.ddlemployerlist.map((emp,index)=>{
               // console.log("printing Ddllist",emp);
                    return <option value={emp._id}>{emp.full_name}</option>
                })}
      </select>
      </>
    )
  }
}
export default Ddlemployer;