import React, { Component } from 'react'
import AdminService from "./services/AdminService"

export class FindEmployee extends Component {

constructor(props) {
    super(props);
    this.state = {
      findemployee: [],
      createemployee:[]

    };
  }

  savee = (event)=>{
    event.preventDefault()
    var ob = {
      employee_object_id:this.eoibox.value,
      first_name : this.fnamebox.value,
      last_name : this.lnamebox.value,
      email : this.emailbox.value,
      mobile_number : this.mobilebox.value,
      dob : this.dobbox.value,
      aniversary_date : this.adatebox.value,
      joining_date : this.Jdbox.value,
      company_id : this.cidbox.value
   }
var pro = AdminService.createemployee(ob)
    pro.then(response=>response.json())
    .then(data=>{  this.setState({'createemployee':data.data})
})

.catch(err=>{
console.log(err)
})   
}
  save = (event)=>{
    event.preventDefault()
    var ob = {
      employee_id:this.eoibox.value,
      }
var pro = AdminService.findemployee(ob)
    pro.then(response=>response.json())
    .then(data=>{  
      
      this.setState({first_name:data.data.first_name})
      this.setState({last_name:data.data.last_name})
     // this.setState({aniversary_date:data.data.aniversary_date})
      //this.setState({dob:data.data.dob})
    //  this.setState({joining_date:data.data.joining_date})
    this.setState({email:data.data.email})
    this.setState({mobile_number:data.data.mobile_number})
    this.setState({company_id:data.data.company_id})

    console.log("emp data",data)
})
.catch(err=>{
console.log(err)

})   
}
updateField=()=>{
  setTimeout(() => {
    console.log("");
  }, 2500);
}

  render() {
    return (
      <div>
        <form onSubmit={this.save}>
          <input
            type="hidden"
            // //autocomplete="on"
            className="form-control"
            value={this.props._id}
            ref={(c) => (this.eoibox = c)}
            placeholder="employee_id..."
            style={{ color: "black" }}
          />
          <button
            type="submit"
            id="form-submit"
            className="button"
            onClick={this.updateField}
          >
            Auto fill details
          </button>
          <br />
          <br />
        </form>

        <div className="row">
          <div className="right-content">
            <div className="container">
              <form id="contact" onSubmit={this.savee}>
                <div className="row">
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={this.state.first_name}
                        ref={(c) => (this.fnamebox = c)}
                        placeholder="First Name..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={this.state.last_name}
                        ref={(c) => (this.lnamebox = c)}
                        placeholder="Last Name..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="phone"
                        className="form-control"
                        defaultValue={this.state.mobile_number}
                        ref={(c) => (this.mobilebox = c)}
                        placeholder="Mobile Number..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                    {/* <label className="control-label col-sm-2 requiredField" for="date">date</label> */}
                      <input
                      id='date'
                        type="date"
                        className="form-control"
                        value={this.state.dob}
                        ref={(c) => (this.dobbox = c)}
                        placeholder="DOB..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="date"
                        className="form-control"
                        value={this.state.joining_date}
                        ref={(c) => (this.Jdbox = c)}
                        placeholder="Joining Date..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="date"
                        className="form-control"
                        value={this.state.aniversary_date}
                        ref={(c) => (this.adatebox = c)}
                        placeholder="Anaversary Date..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        defaultValue={this.state.email}
                        ref={(c) => (this.emailbox = c)}
                        placeholder="Your email..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.company_id}
                        // value={localStorage.getItem("companyId")}
                        ref={(c) => (this.cidbox = c)}
                        placeholder="Company ID..."
                        style={{ color: "black" }}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="hidden"
                        //autocomplete="on"
                        className="form-control"
                        value={this.props._id}
                        ref={(c) => (this.eoibox = c)}
                        placeholder="employee_object_id..."
                        style={{ color: "black" }}
                      />
                    </fieldset>
                  </div>

                  <div className="col-md-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="button"
                        // onClick={this.handelClick}
                      >
                        Update
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindEmployee