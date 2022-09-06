import React, { Component } from 'react'
import AdminService from '../../services/AdminService';

export class AcceeptOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orderid: this.props.order_id,
        
        };
      }
    onToAcceptReject(value) {
        var ob = {
          order_id: [value], 
          status:11,
        };
        console.log("setState",this.state.order_id)
        var pro = AdminService.orderstatus(ob);
        console.log("pro", pro);
        pro
          .then((response) => response.json())
          .then((data) => {
            // this.setState({ status:11?12:11});
            // this.setState({ status:2?11:12});

            console.log("inside deactive")
          })
          .catch((err) => {});

      }


      save = (event)=>{
        event.preventDefault()
        var ob = {
            order_id:[],
            status:11,
          }
    var pro = AdminService.orderstatus(ob)
        pro.then(response=>response.json())
        .then(data=>{  
          console.log("inside accept order",this.state.status)
        //   this.setState({order_id:data.data.first_name})
        console.log("emp data",data.data.first_name)
    })
    .catch(err=>{
    console.log(err)
    
    })   
    }
  render() {
    return (
      <div>
         <section
          className="section contact-me"
          id="menubars"
          data-section="section4"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="headr">Order Management </h2>
              <div className="line-dec"></div>
            </div>
            <div className="row">
                <div className="container ">
                  <form id="contact" onSubmit={this.save}>

                  <div className="col-md-12">
                            <fieldset>
                            <input
                                type="text"
                                className="form-control formcol"
                                // ref={(c) => (this.hfCompanyidbox = c)}
                                value={this.props.order_id}
                                placeholder="OrderId..."
                                style={{ color: "black" }}
                                // onClick={(e) => this.onTodoChange("")}
                                required
                            />
                            </fieldset>
                        </div>

                        <div className="col-md-12">
                            <fieldset>
                            <input
                                type="text"
                                className="form-control formcol"
                                // ref={(c) => (this.hfCompanyidbox = c)}
                                defaultValue="Have fun i have accepted your order"
                                placeholder="comments..."
                                style={{ color: "black" }}
                                // onClick={(e) => this.onTodoChange("")}
                                required
                            />
                            </fieldset>
                        </div>

                        <div className="col-md-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="button"
                          onClick={this.handelClick}
                        >
                          Update
                        </button>
                      </fieldset>
                    </div>
                  </form>
                </div>
              
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default AcceeptOrder