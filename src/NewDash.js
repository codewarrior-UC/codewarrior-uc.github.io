import React from 'react'
import Menu from './Menu';
import AdminService from "./services/AdminService";
import Orderlist from "./Orderlist"

export default class Findjoin extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
        findbirths: [],
    
    }
  }
  componentDidCatch(error, errorInfo) {
   
  };


  componentDidMount()
  {
    AdminService.dashboard()
    .then(response=>response.json())
     
     .then(data =>{this.setState({ 'findbirths':data.data})
     
      
    });
   }



componentDidUpdate(){
  console.log(this.state.findbirths)
}


  render()
  {
    return(<div>
       <section className="section about-me" data-section="section1">

        <Menu/>
    <div className="container">
      <div className="section-heading">
        <h2>  Order List </h2>
        <div className="line-dec"></div>       
      </div> 
      <Orderlist/> 
    </div>



    <div className="container">
      <div className="section-heading">
        <h2>  Joining </h2>
        <div className="line-dec"></div>       
      </div>      
    </div>

  </section>
  </div>);
  }
}
























