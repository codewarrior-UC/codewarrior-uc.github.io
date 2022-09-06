import React, { Component } from "react";
import AdminService from "../../services/AdminService";
import Moment from "react-moment";
import Navbar from "../Nav/Navbar";
import PlaceOrder from "../../PlaceOrder";
import '../../ModalUpdate.css'

export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      findbirths: [],
    };
  }
  componentDidCatch(error, errorInfo) {}
  componentDidMount() {
    AdminService.dashboard()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ findbirths: data.data });
      });
  }
  componentDidUpdate() {
    console.log(this.state.findbirths);
  }

  render() {
    return (
      <div>
        <section className="section about-me" data-section="section1">
          <Navbar />
          <div className="container">
            <div className="section-heading">
              <h2> BirthDay </h2>
              <div className="line-dec"></div>
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
            <div className="modal-dialog modal-dialog-centered" role="document" id="offmenu">
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
                  <PlaceOrder />
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>DOB</th>
                  <th>DOB Month</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.findbirths.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>
                        <Moment format="DD-MM-YYYY">{emp.dob}</Moment>
                      </td>
                      <td>{emp.dob_month}</td>
                        <td>
                        {
                          <input
                            id={"todoName" + emp._id}
                            type="button"
                            className="btn btn-primary badge-pill"
                            data-toggle="modal"
                            value="Place Order"
                            data-target="#exampleModalCenter"
                            placeholder="jkfsd"
                            text={emp._id}
                            //onClick={(e) => this.onTodoChange(orders._id)}
                          />
                    }
                      </td> 
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="container">
            <div className="section-heading">
              <h2> Aniversary </h2>
              <div className="line-dec"></div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Aniversary Date</th>
                  <th>Aniversary Month</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {this.state.findbirths.map((emp, index) => {
                  console.log("findbirths");
                  return (
                    <tr key={index}>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>
                        <Moment format="d-mm-yyyy">
                          {emp.aniversary_date}
                        </Moment>
                      </td>
                      <td>{emp.aniversary_month}</td>
                      <td>
                        {
                          <input
                            id={"todoName" + emp._id}
                            type="button"
                            className="btn btn-primary badge-pill"
                            data-toggle="modal"
                            value="Place Order"
                            data-target="#exampleModalCenter"
                            placeholder="jkfsd"
                            text={emp._id}
                            //onClick={(e) => this.onTodoChange(orders._id)}
                          />
                    }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="container">
            <div className="section-heading">
              <h2> Joining </h2>
              <div className="line-dec"></div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Joining Date</th>
                  <th>Joining Month</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {this.state.findbirths.map((emp, index) => {
                  console.log("findbirths");
                  return (
                    <tr key={index}>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>
                        <Moment format="d-mm-yyyy">{emp.joining_date}</Moment>
                      </td>
                      <td>{emp.joining_month}</td>
                      <td>
                        {
                          <input
                            id={"todoName" + emp._id}
                            type="button"
                            className="btn btn-primary badge-pill"
                            data-toggle="modal"
                            value="Place Order"
                            data-target="#exampleModalCenter"
                            placeholder="jkfsd"
                            text={emp._id}
                          />
                    }
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

export default Events;
