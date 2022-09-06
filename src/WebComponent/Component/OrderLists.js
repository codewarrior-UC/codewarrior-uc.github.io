//employeer
import React from "react";  
import AdminService from "../../services/AdminService";
import "../../modal.css";
import Navbar from '../Nav/Navbar';
// import PlaceOrder from "../../PlaceOrder";
export default class OrderLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderlist: [],
    };
  }
  componentDidMount() {
    AdminService.orderslist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ orderlist: data.data.result });
      });
  }
  render() {
    return (
      <section className="section about-me" id="modaa" data-section="section1">
        <Navbar />
        <div className="container">
          <div className="section-heading">
            <h2>Orders List</h2>
            <div className="line-dec"></div>
          </div>
          {/* <div
            class="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            style={{ backgroundcolor: "black" }}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content" id="mod">
                <div class="modal-body" id="modalcol">
                  <PlaceOrder />
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
           */}
          
{/* 
          <br />
          <br /> */}

          <table className="table table-striped">
            <thead>
              <div></div>
              <tr>
                <th>Company Name</th>
              {<th>Product Type</th>}
                <th>Quantity</th>
                {<th>Price</th>}
                {<th>Status</th>}
                {/* {<th>Action</th>} */}
              </tr>
            </thead>
            <tbody>
              {this.state.orderlist.map((orders, index) => {
                return (
                  <tr key={index}>
                    <td>{orders.company_name}</td>
                    <td>{orders.product_type === 1 ? "BADY" : "ANNI"}</td>
                    <td>{orders.quantity}</td>
                   
                    <td>{orders.amount}</td>
                    <td>
                      {" "}
                      {orders.status === 5
                        ? "Pending"
                        : orders.status === 10
                        ? "Assigned"
                        : orders.status === 11
                        ?  <b style={{color:""}}>Accepted</b>
                        : orders.status === 12
                        ? <b style={{color:""}}>Rejected</b>
                        : "Pending"}
                    </td>

                    {/* <td>
                      {orders.status === 5 ? (
                        <input
                          id={"todoName" + orders._id}
                          type="button"
                          className="btn btn-primary badge-pill"
                          data-toggle="modal"
                          value="Place Order"
                          data-target="#exampleModalCenter"
                          placeholder="jkfsd"
                          text={orders._id}
                          //onClick={(e) => this.onTodoChange(orders._id)}
                        />
                      ) : (
                        <b></b>
                      )}
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
