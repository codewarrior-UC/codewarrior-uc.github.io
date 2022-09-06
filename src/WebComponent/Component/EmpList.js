import React from "react";
import Employee from "../../Employee";
import UpdateEmployee from "../../UpdateEmployee"
import AdminService from "../../services/AdminService";
import Navbar from '../Nav/Navbar'
export default class EmpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: [],
      middle_name: [],
      sort:true,
      employeeslist: [{ first_name: "" }, { middle_name: "" }],
      
      activeIndex: 0,
       status : 'Active',

       _id: "",
       company_id:"",
    };
    }

  componentDidCatch(error, errorInfo) {}

  componentDidMount() {
    AdminService.employeeslist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ employeeslist: data.data.result });
      });
  }
  componentDidUpdate() {
  }
  onToDeactivateEmp(value) {
    var ob = {
      user_id: [value], 
      status: 2,
                          
    };
    var pro = AdminService.changestatusemp(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside deactive")
      })
      .catch((err) => {
        // console.log(err);
      });
    console.log("value", value);
    setTimeout(() => {
      window.location.reload(1);
    }, 2000);
  }



  onToActivateEmp(value) {
    
    var ob = {
      user_id: [value], 
      status: 1,
    };
    var pro = AdminService.changestatusemp(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside active")
      })
      .catch((err) => {
      });
    console.log("value", value);
    setTimeout(() => {
      window.location.reload(1);
    }, 2000);
  } 
  onToDeactivate(value) {
    var ob = {
      user_id: [value], 
      status: 2,
    };
    var pro = AdminService.changestatus(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((err) => {
      });
  
  }

  render() {
    return (
      <div>
        <section className="section about-me" data-section="section1">
          <Navbar />
          <div className="container">
            <div className="section-heading">
              <h2>Employee Management</h2>
              <div className="line-dec"></div>
            </div>
            {/* {localStorage.getItem("companyId")} */}
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Add Employee
              </button>{" "}
              <span> &nbsp; &nbsp; &nbsp;</span>
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
                <div className="modal-content" id="mod">
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
                    <UpdateEmployee
                      _id={this.state._id}
                      // company_id={this.state.company_id}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
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
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <Employee />
                  </div>
                    {/* <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div> */}
                </div>
              </div>
            </div>
            {/* <br />
            <br /> */}
            <table className="table">
              <thead>
                <tr>
                  <th> Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Company Id</th>
                  {/* <th> Employee Id</th> */}
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeeslist.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {emp.first_name}&nbsp;{emp.last_name}
                      </td>
                      <td>{emp.email}</td>
                      <td>{emp.mobile_number}</td>
                      {/* <td>{emp.company_id}</td> */}
                      <td>{emp._id}</td>
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
                            id={"todoName" + emp._id}
                            type="button"
                            className="btn btn-primary badge-pill"
                            data-toggle="modal"
                            data-target="#EmpUpdate"
                            value="EDIT"
                            placeholder="jkfsd"
                            text={emp._id}
                            onClick={() => this.setState({ _id: emp._id })}
                            //  {company_id:emp.company_id:}
                          />
                          &nbsp;
                          <input
                            id={"todoName" + emp._id}
                            type="button"
                            className="btn btn-danger badge-pill"
                            value={
                              emp.status === 2
                                ? "Active"
                                : emp.status === 1
                                ? "Deactive"
                                : "Deactive"
                            }
                            text={emp._id}
                            onClick={(e) => {
                              emp.status
                                ? emp.status === 2
                                  ? this.onToActivateEmp(emp._id)
                                  : this.onToDeactivateEmp(emp._id)
                                : emp.status === 1
                                ? this.onToDeactivateEmp(emp._id)
                                : this.onToActivateEmp(emp._id);
                            }}
                            // onClick={(e) => this.onToDeactivate(emp._id)}
                          />
                        </tr>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}
