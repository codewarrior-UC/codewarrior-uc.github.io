import React from "react";
import Employee from "../../Employee";
// import UpdateEmployee from "../../UpdateEmployee"
import AdminService from "../../services/AdminService";
import Navbar from '../Nav/Navbar'
export default class ListEmployee extends React.Component {
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
     
  onToDeactivate(value) {
    var ob = {
      user_id: [value], 
      status: 2,
    };
    console.log("ob", ob);

    var pro = AdminService.changestatus(ob);
    console.log("pro", pro);

    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside deactive")
      })
      .catch((err) => {
        console.log(err);
      });
  
    console.log("value", value);
  }
//handelFileds= ()=>{ this.setState({_id:emp._id}),
  //  {company_id:emp.company_id}}
  

  render() {
    return (
      <div>
        <section class="section about-me" data-section="section1">
          <Navbar/>
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
                Employee Registeration
              </button> <span> &nbsp; &nbsp; &nbsp;</span>
              <br />
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
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content"  id="mod">
                  <div class="modal-body" id="modalcol">
                    {/* <UpdateEmployee _id={this.state._id} company_id={this.state.company_id}/> */}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              style={{ backgroundcolor: "black" }}
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content"  id="mod">
                  <div class="modal-body" id="modalcol">
                    <Employee />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <table className="table">
              <thead>
                <tr>
                  <th> Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Company Id</th> 
                  <th> Employee Id</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeeslist.map((emp, index) => {
                  
                  return (
                    <tr key={index}>
                      <td>{emp.first_name}&nbsp;{emp.last_name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.mobile_number}</td>
                      <td>{emp.company_id}</td>
                      <td>{emp._id}</td>

                            <td>{emp.status}
                              {  emp.status === 1 
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
                           onClick={()=> this.setState({_id:emp._id} )}
                         //  {company_id:emp.company_id:}
                        />
                        
                          &nbsp;
                          <input
                          id={"todoName" + emp._id}
                          type="button"
                          className="btn btn-primary badge-pill"
                          value="deactivate"
                          placeholder="jkfsd"
                          text={emp._id}
                          onClick={(e) => this.onToDeactivate(emp._id)}
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
