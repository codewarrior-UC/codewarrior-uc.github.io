import React from "react";
import AdminService from "./services/AdminService";
import "./modal.css";
import FindEmployer from "./FindEmployer";
 //import employeerlist from "./EmployeerList";
export default class Employer extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      createemployer: [],
      findemployer:[]
    };
  }

  componentDidMount() {
    AdminService.getemployer()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ findemployee: data.data });
        console.log("data", data.data);
      });
  }

  componentDidCatch(error, _errorInfo) {
    console.log("error--", error);
   }
   componentDidUpdate(){
   }

  save = (event) => {
    event.preventDefault();
    var ob = {
      user_id: this.hfCompanyidbox.value,
      first_name: this.fnamebox.value,
      last_name: this.lnamebox.value,
      email: this.emailbox.value,
      mobile_number: this.mobilebox.value,
      password: this.passbox.value,
      company_name: this.cnamebox.value,
    };
    var pro = AdminService.createemployer(ob);
    console.log("Employeer id", )
    pro
      .then((response) => response.json())
      .then((data) => {
        this.setState({ 'createemployer': data.data.result });
        console.log("ffdg")

      })
      .catch((err) => {
        console.log(err);
      });
  };
  handelClick = () => {
    setTimeout(() => {
      window.location.reload(1);
    }, 9500);
    console.log("page to reload");
  };
  onTodoChange(value) {
    this.setState({
      userId: value,
    });
    //console.log("value", value);
  }
  // handleCallback = (childData) => {
  //   // debugger;
  //   console.log("childData", childData);
  //   this.setState({ namefield: childData });
  // };
  render() {
   
    return (
      <>
        <section
          className="section contact-me"
          id="menubars"
          data-section="section4"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="headr">Employer Update</h2>
              <div className="line-dec"></div>
            </div>
            <FindEmployer user_id={this.props.user_id}/>
            <div className="row">
              <div className="right-content">
                <div className="container">
                  <form id="contact" onSubmit={this.save}>
                    {/* <div className="row">
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            type="text"
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
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            type="text"
                            className="form-control"
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
                            ref={(c) => (this.passbox = c)}
                            placeholder="Password..."
                            style={{ color: "black" }}
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            type="text"
                            className="form-control"
                            ref={(c) => (this.cnamebox = c)}
                            placeholder="Company Name..."
                            style={{ color: "black" }}
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
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
