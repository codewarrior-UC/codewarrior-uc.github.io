import React from "react";
import AdminService from "./services/AdminService";
import "./modal.css";
import FindEmployee from "./FindEmployee";

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      createemployee: [],
      findemployee: [],
    };
  }

  componentDidMount() {
    AdminService.findemployee()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ findemployee: data.data });
        console.log("data", data.data);
      });
  }

  componentDidCatch(error, _errorInfo) {
    console.log("error--", error);
  }
  componentDidUpdate() {}

  save = (event) => {
    event.preventDefault();
    var ob = {
      employee_object_id: this.eoibox.value,
      first_name: this.fnamebox.value,
      last_name: this.lnamebox.value,
      email: this.emailbox.value,
      mobile_number: this.mobilebox.value,
      dob: this.dobbox.value,
      aniversary_date: this.adatebox.value,
      joining_date: this.Jdbox.value,
      // company_id: this.cidbox.value,
    };
    var pro = AdminService.createemployee(ob);
    pro
      .then((response) => response.json())
      .then((data) => {
        this.setState({ createemployee: data.data.company_result });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onTodoChange(value) {
    this.setState({
      userId: value,
    });
    //console.log("value", value);
  }

  handelClick = () => {
    //reload function
    setTimeout(() => {
      window.location.reload(1);
    }, 2500);
    console.log("page to reload");
  };
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
              <h2 id="headr">Employee Update</h2>
              <div className="line-dec"></div>
            </div>

            <FindEmployee _id={this.props._id} />

            <div className="row">
              <div className="right-content">
                <div className="container">
                  <form id="contact" onSubmit={this.save}>
                    <div className="row">
                      {/* 
              <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      //autocomplete="on"
                      className="form-control"
                      value={this.props._id}
                      ref={c=>this.eoibox=c}
                      placeholder="employee_object_id..."
                      style={{color: "black" }}

                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.fnamebox=c}
                      placeholder="First Name..."
                      style={{color: "black" }}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.lnamebox=c}
                      placeholder="Last Name..."
                      style={{color: "black" }}
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
                      ref={c=>this.emailbox=c}
                      placeholder="Your email..."
                      style={{color: "black" }}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="phone"
                      className="form-control"
                      ref={c=>this.mobilebox=c}
                      placeholder="Mobile Number..."
                      style={{color: "black" }}
                     required
                    />
                  </fieldset>
                </div>
                
                
                <div className="col-md-12">
                  <fieldset>
                    <input
                      type="text"
                      className="form-control"
                      ref={c=>this.cidbox=c}
                      placeholder="Company ID..."
                      style={{color: "black" }}
                      required
                    />
                  </fieldset>
                </div>
               
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button" onClick={this.handelClick}>
                      Update
                    </button>
                  </fieldset> 
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="date"
                      className="form-control"
                      ref={c=>this.dobbox=c}
                      placeholder="DOB..."
                      style={{color: "black" }}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="date"
                      className="form-control"
                      ref={c=>this.adatebox=c}
                      placeholder="Anaversary Date..."
                      style={{color: "black" }}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="date"
                      className="form-control"
                      ref={c=>this.Jdbox=c}
                      placeholder="Joining Date..."
                      style={{color: "black" }}
                      required
                    />
                  </fieldset>
                  </div>      //added some divs.. so please check if u uncomment
                */}
                    </div>
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
