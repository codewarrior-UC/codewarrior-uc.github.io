import React from "react";
import Menu from "./Menu";
import AdminService from "./services/AdminService";
import Moment from "react-moment";

export default class Findjoin extends React.Component {
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
          <Menu />
          <div className="container">
            <div className="section-heading">
              <h2> BirthDay </h2>
              <div className="line-dec"></div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>DOB</th>
                  <th>DOB Month</th>
                </tr>
              </thead>
              <tbody>
                {this.state.findbirths.map((emp, index) => {
                  console.log("findbirths");
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>
                        <Moment format="DD-MM-YYYY">{emp.dob}</Moment>
                      </td>
                      <td>{emp.dob_month}</td>
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
                  <th>S. No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Aniversary Date</th>
                  <th>Aniversary Month</th>
                </tr>
              </thead>
              <tbody>
                {this.state.findbirths.map((emp, index) => {
                  console.log("findbirths");
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>
                        <Moment format="d-mm-yyyy">
                          {emp.aniversary_date}
                        </Moment>
                      </td>
                      <td>{emp.aniversary_month}</td>
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
                  <th>S. No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Joining Date</th>
                  <th>Joining Month</th>
                </tr>
              </thead>
              <tbody>
                {this.state.findbirths.map((emp, index) => {
                  console.log("findbirths");
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>
                        <Moment format="d-mm-yyyy">{emp.joining_date}</Moment>
                      </td>
                      <td>{emp.joining_month}</td>
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
