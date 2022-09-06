import React from "react";
import AdminService from "./services/AdminService";
import "./modal.css";
import Menu from "./Menu";
import DdlvenderList from "./DdlvenderList";
import Ddlcompany from "./Ddlcompany";
export default class Orderlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderlist: [],
      filteredOrderList: [],
    };
  }
  componentDidMount() {
    AdminService.orderslist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          orderlist: data.data.result,
          filteredOrderList: data.data.result,
        });
      });
  }
  componentDidUpdate() {}

  save = (event) => {
    event.preventDefault();
    console.log("this.state.ddlVenderbox.value", this.state.ddlVenderbox);
    var ob = {
      vender_id: this.state.namefield,
      order_id: this.hfOrderidbox.value,
    };
    var pro = AdminService.orderassign(ob);
    pro
      .then((response) => response.json())
      .then((data) => {
        this.setState({ orders: data.data.result });
      })
      .catch((err) => {});
  };

  onTodoChange(value) {
    this.setState({
      hfOrderId: value,
    });
  }

  handleCallback = (childData) => {
    console.log("orderlist Filtersetter", this.state.orderlist);

    let filteredOrderList = this.state.orderlist;
    console.log("childDataaaaaa", childData);
    console.log("orderlistfdsfdsfs", this.state.orderlist);

    if (!(childData === "Please Select Company")) {
      filteredOrderList = filteredOrderList.filter(
        (order) => order.company_id === childData
      );
      console.log("filteredOrderList:-", filteredOrderList);
    }
    this.setState({ namefield: childData, filteredOrderList });
  };

  handleCallbackkk = (childData) => {
    console.log("childData", childData);
    this.setState({ namefield: childData });
  };

  handelClick = () => {
    setTimeout(() => {
      window.location.reload(1);
    }, 2500);
  };
  render() {
    return (
      <section className="section about-me" id="modaa" data-section="section1">
        <Menu />
        <div className="container">
          <div className="section-heading">
            <h2>Dashboard</h2>
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
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content" id="asignmod">
                <div className="modal-body" id="asignmodal">
                  <form onSubmit={this.save}>
                    <DdlvenderList parentCallback={this.handleCallbackkk} />
                    <br />
                    <br />
                    <div className="col-md-6 ">
                      <fieldset>
                        <input
                          type="text"
                          value={this.state.hfOrderId}
                          className="form-control"
                          ref={(c) => (this.hfOrderidbox = c)}
                          placeholder="id goes here"
                          //  id="hfOrderid"
                          required
                        />
                      </fieldset>
                    </div>
                    <button
                      type="submit"
                      id="form-submit"
                      className="button"
                      onClick={this.handelClick}
                      style={{marginTop:"20px"}}
                    >
                      OrderAssign
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Ddlcompany parentCallback={this.handleCallback} />
          <table className="table table">
            <thead>
              <tr>
                <th>Company Name</th>
                {<th>Product Type</th>}
                <th>Quantity</th>
                {<th>Price</th>}
                {<th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {this.state.filteredOrderList.map((orders, index) => {
                return (
                  <tr key={index}>
                    <td>{orders.company_name}</td>
                    <td>
                      {orders.product_type === 1
                        ? "BADY"
                        : orders.product_type === 2
                        ? "ANNI"
                        : "Joining"}
                    </td>
                    <td>{orders.quantity}</td>
                    <td>{orders.amount}</td>
                    <td>
                      {orders.status === 5 ? (
                        <input
                          id={"todoName" + orders._id}
                          type="button"
                          className="btn btn-primary badge-pill"
                          data-toggle="modal"
                          value="Assign vendor"
                          data-target="#exampleModalCenter"
                          placeholder="jkfsd"
                          text={orders._id}
                          onClick={(e) => this.onTodoChange(orders._id)}
                        />
                      ) : orders.status === 11 ? (
                        <p style={{color:"green"}}>Accepted</p>
                      ): orders.status === 12 ?(
                        <p style={{color:"red"}}>Rejected</p>
                      ):(<p>Waiting for Vender's Response</p>)
                      }
                    </td>
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

// {orders.status === 5 ? (
//   <input
//     id={"todoName" + orders._id}
//     type="button"
//     className="btn btn-primary badge-pill"
//     data-toggle="modal"
//     value="Assign vendor"
//     data-target="#exampleModalCenter"
//     placeholder="jkfsd"
//     text={orders._id}
//     onClick={(e) => this.onTodoChange(orders._id)}
//   />
// ) : (
//   <p>Waiting for Vender's Response</p>
// )}