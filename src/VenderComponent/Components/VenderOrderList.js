import React, { Component } from 'react'
import VenderMenu from '../VenderMenu'
import AdminService from "../../services/AdminService";

export class VenderOrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderlist: [],
      order_id:''
    };
  }
  componentDidMount() {
    AdminService.orderslist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ orderlist: data.data.result });
      });
  }
  onToDeactivateorderss(value){
    var ob = {
      order_id: [value], 
      status:6,
    };
    console.log("setState",value)
    var pro = AdminService.orderstatus(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside accept/reject")
      })
      .catch((err) => {});
  }

  onToDeactivateorders(value){
    var ob = {
      order_id: [value], 
      status:11,
    };
    console.log("setState",value)
    var pro = AdminService.orderstatus(ob);
    console.log("pro", pro);
    pro
      .then((response) => response.json())
      .then((data) => {
        console.log("inside accept/reject")
      })
      .catch((err) => {});
  }
  render() {
    return (
    <>
    <section className="section about-me" id="modaa" data-section="section1">
        <VenderMenu />
        <div className="container">
          <div className="section-heading">
            <h2>Dashboard</h2>
            <div className="line-dec"></div>
          </div>
          <table className="table table-striped">
            <thead>
              <div></div>
              <tr>
              {<th>Company Name</th>}
              {<th>Product Type</th>}
                <th>Quantity</th>
                {/* <th>id</th> */}
                <th>comments</th>
                {<th>Price</th>}
                {<th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {this.state.orderlist.map((orders, index) => {
                return (
                  <tr key={index}>
                    <td>{orders.company_name}</td>
                    <td>{orders.product_type === 1 ? "BADY" : orders.product_type === 2 ? "ANNI":"Joining"}</td>
                    <td>{orders.quantity}</td>
                    {/* <td>{orders._id}</td> */}
                    <td>{orders.comments}</td>
                    <td>{orders.amount}</td>
                    <td>
                    {orders.status === 10 ? (<>
  <input
          id={"todoName" + orders.company_id}
          type="button"
          className="btn btn-primary"
          value="Accept"
          text={orders.company_id}
          onClick={(e) => this.onToDeactivateorders(orders._id)}
        />
&nbsp;
      <input
          id={"todoName" + orders.company_id}
          type="button"
          className="btn btn-danger"
          value="Reject"
          text={orders.company_id}
          onClick={(e) => this.onToDeactivateorderss(orders._id)}
        />
        </>
        ) : orders.status === 11 ? (
          <p style={{color:"green"}}>Accepted</p>
        ): orders.status === 6 ?(
          <p style={{color:"red"}}>Rejected</p>
        ):(<p> </p>)
        }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
    )
  }
}
export default VenderOrderList

// {orders.status === 5 ? (
//   <input
//           id={"todoName" + orders.company_id}
//           type="button"
//           className="btn btn-primary badge-pill"
//           value="Accept"
//           placeholder="jkfsd"
//           text={orders.company_id}
//           onClick={(e) => this.onToDeactivateorders(orders._id)}
//         />
//      <p> </p>
//       <input
//           id={"todoName" + orders.company_id}
//           type="button"
//           className="btn btn-danger badge-pill"
//           value="Reject"
//           placeholder="jkfsd"
//           text={orders.company_id}
//           onClick={(e) => this.onToDeactivateorders(orders._id)}
//         />
//         ) : orders.status === 11 ? (
//           <p>Accepted</p>
//         ): orders.status === 12 ?(
//           <p>Rejected</p>
//         ):(<p>Waiting for Vender's Response</p>)
//         }