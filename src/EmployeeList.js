import React from "react";
import Employee from "./Employee";
import UpdateEmployee from "./UpdateEmployee";
import AdminService from "./services/AdminService";
import Menu from "./Menu";
import Ddlcompany from "./Ddlcompany";
import Moment from "react-moment";
import "./ModalUpdate.css";
// import { FilteringTable } from "./components/FilteringTable";

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: [],
      middle_name: [],
      sort: true,
      employeeslist: [{ first_name: "" }, { middle_name: "" }],
      filteredEmpList: [],
      activeIndex: 0,
      status: "Active",
      _id: "",
      company_id: "",
      currentPage: 1
    };
  }
  componentDidCatch(error, errorInfo) {}

  componentDidMount() {
    AdminService.employeeslist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          employeeslist: data.data.result,
          filteredEmpList: data.data.result,
        });
      });
  }
  componentDidUpdate() {}
  onToDeactivateEmp(value) {
    var ob = {
      user_id: [value], 
      status: 2,
      setEmpId:{value},
    };
    var pro = AdminService.changestatus(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside deactive")
      })
      .catch((err) => {
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
      setEmpId:{value},
    };
    console.log("setState",this.state.status)
    console.log("ob", ob);
    console.log("setEmpId", ob.setEmpId);
    console.log("user_id", ob.user_id);
    var pro = AdminService.changestatus(ob);
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

  handleCallback = (childData) => {
    console.log("childData", childData);
    let filteredEmpList = this.state.employeeslist;
    if (!(childData === "Please Select Company")) {
      filteredEmpList = filteredEmpList.filter(
        (emp) => emp.company_id === childData
      );
      console.log("filteredEmpList:-", filteredEmpList);
    }
    this.setState({ namefield: childData, filteredEmpList });
  };

  changePath(newPage) {
    this.setState({currentPage: newPage})
}
  render() {
    return (
      <div>
        <section class="section about-me"  id= "sectiontables" data-section="section1">
          <Menu />
          <div class="container">
            <div class="section-heading">
              <h2>Employee Management</h2>
              <div class="line-dec"></div>
            </div>
            <div class="d-flex flex-row-reverse">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
               Add Employee
              </button>{" "}
              <span> &nbsp; &nbsp; &nbsp;</span>
            </div>
            <div
              class="modal fade"
              id="EmpUpdate"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              style={{ backgroundcolor: "black" }}
            >
              <div class="modal-dialog modal-dialog-centered" role="document" id="offmenu">
                <div class="modal-content" id="mod">
                  <div class="modal-body" id="modalcol">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      className="d-flex flex-row-reverse bd-highlight closeModal"
                      onClick={()=>{}}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <UpdateEmployee
                      _id={this.state._id}
                      company_id={this.state.company_id}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              style={{ backgroundcolor: "black" }}
            >
              <div class="modal-dialog modal-dialog-centered" role="document"  id="offmenu">
                <div class="modal-content" id="mod">
                  <div class="modal-body" id="modalcol">
                  <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      className="d-flex flex-row-reverse bd-highlight closeModal"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <Employee />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <Ddlcompany parentCallback={this.handleCallback} />
            <table className="table table-hover" id="tabless">
              <thead>
                <tr>
                  <th scope="col"> Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">dob</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {this.state.filteredEmpList.map((emp, index) => {
                 return (
                    <>
                    <tr key={index}>
                      <td>
                        {emp.first_name}&nbsp;{emp.last_name}
                      </td>
                      <td>{emp.email}</td>
                      <td>{emp.mobile_number}</td>
                      <td>
                        <Moment format="DD-MM-YYYY">{emp.dob}</Moment>
                      </td>
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
                            onClick={(e) => {
                              emp.status
                                ? (emp.status === 2
                                  ? this.onToActivateEmp(emp._id)
                                  : this.onToDeactivateEmp(emp._id))
                                : (emp.status === 1
                                ? this.onToDeactivateEmp(emp._id)
                                : this.onToActivateEmp(emp._id));
                            }}
                          />
                        </tr>
                      </td>
                    </tr>
                    </>
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
