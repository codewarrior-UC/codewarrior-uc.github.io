import React from "react";
import AdminService from "./services/AdminService";
import Employer from "./Employer";
import UpdateEmployer from "./UpdateEmployer";
import Menu from "./Menu";
import "./Vender.css";

export default class EmployeerList extends React.Component {
  constructor() {
    super();
    this.state = {
      employeerlist: [],
      user_id: "",
      page: 1,
      pagesize: 10,
    };
  }
  componentDidMount() {
    AdminService.employeerlist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ employeerlist: data.data.result });
      });
  }

  onToDeactivateEmp(value) {
    var ob = {
      user_id: [value],
      status: 2,
      setEmpId: { value },
    };
    var pro = AdminService.changestatus(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside deactive");
      })
      .catch((err) => {});
    console.log("value", value);
    setTimeout(() => {
      window.location.reload(1);
    }, 1500);
  }

  onToActivateEmp(value) {
    var ob = {
      user_id: [value],
      status: 1,
      setEmpId: { value },
    };
    var pro = AdminService.changestatus(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => {});
    setTimeout(() => {
      window.location.reload(1);
    }, 1500);
  }

  HandelPrevClick = () => {
    console.log("HandelPrevClick");
    this.setState({
      page: this.state.page - 1,
    });
    console.log(this.state.page);
  };

                  HandelNextClick = () => {
                    AdminService.employeerlist()
                      .then((response) => response.json())
                      .then((data) => {
                        this.setState({ employeerlist: data.data.result });
                      });
                    this.setState({
                      page: this.state.page + 1,
                    });
                    console.log("HandelNextClick", this.state.page);
                  };

  render() {
    return (
      <section className="section about-me" data-section="section1">
        <Menu />
        <div className="container">
          <div className="section-heading">
            <h2>Employer List</h2>
            <div className="line-dec"></div>
          </div>
          <div className="d-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-primary badge-pill"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add Employer
            </button>{" "}
            <span>&nbsp; &nbsp; &nbsp;</span>
            <br />
          </div>
          <div
            className="modal fade"
            id="EmpUpdate"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            style={{ backgroundcolor: "black" }}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              id="offmenu"
            >
              <div className="modal-content">
                <div className="modal-body" id="modalcol">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    class="d-flex flex-row-reverse bd-highlight closeModal"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <UpdateEmployer user_id={this.state.user_id} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            style={{ backgroundcolor: "black" }}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              id="offmenu"
            >
              <div className="modal-content" id="mod">
                <div className="modal-body" id="modalcol">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    class="d-flex flex-row-reverse bd-highlight closeModal"
                    onClick={()=>{console.log("we should empty form from here")}}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <Employer />
                </div>
              </div>
            </div>
          </div>
          <br />
         

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>company name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employeerlist.map((emp, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {emp.first_name} {emp.last_name}{" "}
                    </td>
                    <td>{emp.email}</td>
                    <td>{emp.mobile_number}</td>
                    <td>{emp.company_name}</td>
                    <td>
                      {emp.status === 1
                        ? "Active"
                        : emp.status === 2
                        ? "Deactive"
                        : "Deactive"}
                    </td>
                    <td>
                      <tr>
                        <input
                          id={"todoName" + emp.company_id}
                          type="button"
                          data-toggle="modal"
                          data-target="#EmpUpdate"
                          className="btn btn-primary badge-pill"
                          value="EDIT"
                          placeholder="jkfsd"
                          text={emp.company_id}
                          onClick={() => this.setState({ user_id: emp._id })}
                        />
                        &nbsp;
                        <input
                          id={"todoName" + emp.company_id}
                          type="button"
                          className="btn btn-danger badge-pill"
                          value={
                            emp.status === 2
                              ? "Active"
                              : emp.status === 1
                              ? "Deactive"
                              : "Deactive"
                          }
                          text={emp.company_id}
                          // onClick={emp.status===2?(emp.status===1?this.onToDeactivateEmp(emp._id):this.onToDeactivateEmpp(emp._id)):(emp.status===2?this.onToDeactivateEmp(emp._id):this.onToDeactivateEmpp(emp._id))}
                          onClick={(e) => {
                            emp.status
                              ? emp.status === 2
                                ? this.onToActivateEmp(emp._id)
                                : this.onToDeactivateEmp(emp._id)
                              : emp.status === 1
                              ? this.onToDeactivateEmp(emp._id)
                              : this.onToActivateEmp(emp._id);
                          }}
                        />
                      </tr>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.HandelPrevClick}
          >
            &larr; prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.HandelNextClick}
          >
            next &rarr;
          </button>
        </div>
      </section>
    );
  }
}
