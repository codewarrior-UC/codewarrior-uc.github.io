 import React, { Component } from 'react'
import AdminService from "./services/AdminService"

export class FindEmployer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          getemployer: [],
          createemployer:[]
    
        };
      }
    
      savee = (event) => {
        event.preventDefault();
        var ob = {
          user_id: this.hfCompanyidbox.value,
          first_name: this.fnamebox.value,
          last_name: this.lnamebox.value,
          email: this.emailbox.value,
          mobile_number: this.mobilebox.value,
          // password: this.passbox.value,
          company_name: this.cnamebox.value,
        };
        var pro = AdminService.createemployer(ob);
        pro
          .then((response) => response.json())
          .then((data) => {
            this.setState({ 'createemployer': data.data });
            console.log("ffdg")
    
          })
          .catch((err) => {
            console.log(err);
          });
      };
      save = (event)=>{
        event.preventDefault()
        var ob = {
            user_id:this.hfCompanyidbox.value,
          }
    var pro = AdminService.getemployer(ob)
        pro.then(response=>response.json())
        .then(data=>{  
          console.log("inside get employeer",data.data)
          this.setState({first_name:data.data.first_name})
          this.setState({last_name:data.data.last_name})
          this.setState({email:data.data.email})
          this.setState({mobile_number:data.data.mobile_number})
          // this.setState({password:data.data.password})
          this.setState({company_name:data.data.comapny_name})
    
        console.log("emp data",data.data.first_name)
    })
    .catch(err=>{
    console.log(err)
    
    })   
    }
    handelClick=()=>{
      setTimeout(() => {
        window.location.reload(1);
      }, 2500);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.save}>
          <input
            type="hidden"
            //autocomplete="on"
            className="form-control"
            value={this.props._id}
            ref={(c) => (this.hfCompanyidbox = c)}
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
                         // value={this.state.last_name}
                         // onChange={(e)=>{this.setState({last_name:e.target.value})}}
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
                          // name="email"
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
                          defaultValue={this.state.mobile_number}
                          ref={(c) => (this.mobilebox = c)}
                          placeholder="Mobile Number..."
                          style={{ color: "black" }}
                          required
                        />
                      </fieldset>
                    </div>
                    {/* <div className="col-md-6">
                      <fieldset>
                        <input
                          type="password"
                          className="form-control"
                          ref={(c) => (this.passbox = c)}
                          placeholder="Password..."
                          style={{ color: "black" }}
                          required
                        />
                      </fieldset>
                    </div> */}
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={this.state.company_name}
                          ref={(c) => (this.cnamebox = c)}
                          placeholder="Company Name..."
                          style={{ color: "black" }}
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          type="hidden"
                          className="form-control formcol"
                          ref={(c) => (this.hfCompanyidbox = c)}
                          value={this.props.user_id}
                          placeholder="UserID..."
                          style={{ color: "black" }}
                          onClick={(e) => this.onTodoChange("")}
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="button"
                          onClick={this.handelClick}
                        >
                          Update
                        </button>
                      </fieldset>
                    </div>
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

export default FindEmployer