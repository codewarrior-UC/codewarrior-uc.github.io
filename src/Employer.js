import React from "react";
import AdminService from "./services/AdminService";
import Menu from "./Menu";
export default class Employer extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      createemployer: [],
    };
  }

  save = (event) => {
    event.preventDefault();
    var ob = {
      user_id: this.uidbox.value,
      first_name: this.fnamebox.value,
      //   middle_name : this.mnamebox.value,
      last_name: this.lnamebox.value,
      email: this.emailbox.value,
      mobile_number: this.mobilebox.value,
      password: this.passbox.value,
      company_name: this.cnamebox.value,
    };
    var pro = AdminService.createemployer(ob);
    pro
      .then((response) => response.json())
      .then((data) => {
        this.setState({ createemployer: data.data.result });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handelClick = () => {
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
          data-section="section4"
          id="menubars"
        >
          <Menu />
          <div className="container">
            <div className="section-heading">
              <h2 id="headr">Employer Registeration</h2>
              <div className="line-dec"></div>
            </div>
            <div className="row">
              <div className="right-content">
                <div className="container">
                  <form id="contact" onSubmit={this.save}>
                    <div className="row">
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
                            name="email"
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            type="hidden"
                            className="form-control"
                            ref={(c) => (this.uidbox = c)}
                            placeholder="UserID..."
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
                            onClick={this.handelClick}
                          >
                            Register
                          </button>
                        </fieldset>
                      </div>
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
