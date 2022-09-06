import React from "react";
import AdminService from "./services/AdminService";
import Vender from "./Vender";
import Menu from "./Menu";
import "./Vender.css";
import UpdateVender from "./UpdateVender";
export default class VendersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venderlist: [],
      user_id:"",
    };
  }
  componentDidCatch(error, errorInfo) {}
  componentDidMount() {
    AdminService.venderlist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ venderlist: data.data.result });
      });
  }
  componentDidUpdate() {
    console.log(this.state.venderlist);
  }
 
  onToDeactivatevender(value) {
    var ob = {
      user_id: [value], 
      status: 2,
      setEmpId:{value},
                          
    };
    var pro = AdminService.changestatusvender(ob);
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



  onToActivateVender(value) {
    
    var ob = {
      user_id: [value], 
      status: 1,
      setEmpId:{value},
    };
    console.log("setState",this.state.status)
    console.log("ob", ob);
    console.log("setEmpId", ob.setEmpId);
    console.log("user_id", ob.user_id);
    var pro = AdminService.changestatusvender(ob);
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
 
 
 
  // onToDeactivatevender(value) {
  //   var ob = {
  //     user_id: [value],
  //     status: 2,
  //     setVenderId: { value },
  //   };
  //   console.log("ob", ob);
  //   console.log("setVenderId", ob.setVenderId);
  //   console.log("_id", ob.user_id);
  //   var pro = AdminService.changestatusvender(ob);
  //   console.log("pro", pro);
  //   pro
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("inside deactive", data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   console.log("value", value);
  // }
  render() {
    return (
      <div>
        <section className="section about-me" data-section="section1">
          <Menu />
          <div className="container">
            <div className="section-heading">
              <h2>Vender Management </h2>
              <div className="line-dec"></div>
            </div>
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className="btn btn-primary "
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Vender Add
              </button>
              <br />
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
                    <Vender />
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
            <br />
            <div
              className="modal fade"
              id="venderUpdate"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              style={{ backgroundcolor: "black" }}
            >
              <div className="modal-dialog modal-dialog-centered" role="document" id="offmenu">
                <div className="modal-content" id="mod">
                  <div className="modal-body" id="modalcol">
                  <button
                      type="button"
                      className="close"
                      onClick={()=>{}}
                      data-dismiss="modal"
                      aria-label="Close"
                      class="d-flex flex-row-reverse bd-highlight closeModal"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <UpdateVender user_id={this.state.user_id}/>
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

            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.venderlist.map((emp, index) => {
                  console.log("venderlist");
                  return (
                    <tr key={index}>
                      <td id="vendertables">{emp.full_name}</td>
                      <td id="vendertables">{emp.email}</td>
                      <td id="vendertables">{emp.mobile_number}</td>
                      <td id="vendertables">
                        {emp.status === 1
                          ? "Active"
                          : emp.status === 2
                          ? "Deactive"
                          : "Deactive"}
                      </td>
                      <td id="vendertables">
                        <tr>
                          <input
                            id={"todoName" + emp.vender_id}
                            type="button"
                            data-toggle="modal"
                            data-target="#venderUpdate"
                            className="btn btn-primary badge-pill"
                            value="EDIT"
                            placeholder="jkfsd"
                            text={emp.vender_id}
                            onClick={() => this.setState({ user_id: emp._id })}
                          />
                          <span> &nbsp; &nbsp;</span>
                          <input
                            id={"todoName" + emp._id}
                            type="button"
                            className="btn btn-danger "
                            value={
                              emp.status === 1
                                ? "Deactivate"
                                : emp.status === 2
                                ? "Activate"
                                : "Deactive"
                            }
                            placeholder="deactiv"
                            onClick={(e) => {
                              emp.status
                                ? (emp.status === 2
                                  ? this.onToActivateVender(emp._id)
                                  : this.onToDeactivatevender(emp._id))
                                : (emp.status === 1
                                ? this.onToDeactivatevender(emp._id)
                                : this.onToActivateVender(emp._id));
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
        </section>
      </div>
    );
  }
}

