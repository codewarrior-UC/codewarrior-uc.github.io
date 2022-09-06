import React, { Component } from 'react'
import AdminService from './services/AdminService';


export class ChangeStatus extends Component {

    constructor(props)
    {
      super(props);
      this.state = {msg : 'Active'}
      this.handleClick = this.handleClick.bind(this)
    //   this.state = {
    //     changestatus : [],
    //   }
    }
    handleClick(){

	// Changing state
	this.setState({msg : 'Deactive'})
}
    componentDidCatch(error, errorInfo) {
      console.log("error--",error)
    };

    componentDidMount()
  {
    AdminService.changestatus()
    .then(response=>response.json())
     .then(data =>{this.setState({ 'changestatus':data.data})
     console.log("data",data);
    });
   }


   handleChange() {
    console.log("handleChange value",this.ddlVender1box.value);
    this.setState({
      hfVender: this.ddlVender1box.value,
    });
  }
  render() {
    return (
      <div>
        {/* <p>{this.state.msg}</p>
        <button onClick={this.handleClick}>
		Deactive
		</button> */}
      </div>
    )
  }
}

export default ChangeStatus