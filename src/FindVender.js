import React, { Component } from "react";
import AdminService from "./services/AdminService";

export class FindVender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      findvender: [],
      createvender: [],
    };
  }
  savee = (event) => {
    console.log("hello")
    event.preventDefault();
    var ob = {
      vender_object_id: this.vidbox.value,
      first_name: this.fnamebox.value,
      last_name: this.lnamebox.value,
      email: this.emailbox.value,
      password: this.passbox.value,
      mobile_number: this.mobilebox.value,
    };
    var pro = AdminService.createvender(ob);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside admin serv", data)
        this.setState({ createvender: data.data });
      })
   
      .catch((err) => {
        console.log(err);
      });
      console.log("pro", pro);
      console.log("pro",);
       setTimeout(() => {
        window.location.reload(1);
    }, 2500);
  };
  save = (event) => {
    event.preventDefault();
    var ob = {
      user_id: this.vidbox.value,
    };
    var pro = AdminService.findvender(ob);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside get employeer", data);
        this.setState({ _id: data.data._id });
        this.setState({ first_name: data.data.first_name });
        this.setState({ last_name: data.data.last_name });
        this.setState({ email: data.data.email });
        this.setState({ mobile_number: data.data.mobile_number });
        console.log("emp data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.save}>
          <input
            type="hidden"
            // //autocomplete="on"
            className="form-control"
            value={this.props.user_id}
            ref={(c) => (this.vidbox = c)}
            placeholder="vender_id..."
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
                    <input
                      type="password"
                      className="form-control"
                      ref={c=>this.passbox=c}
                      placeholder="Password..."
                      style={{color:"black"}}
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
                        Update Vender
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

export default FindVender;
