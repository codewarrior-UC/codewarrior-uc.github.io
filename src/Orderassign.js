import React from 'react'
import AdminService from "./services/AdminService";
import Menu from './Menu'
import './modal.css'

export default class Orderassign extends React.Component{
  constructor()
  {
    super()
    this.state={
      msg :'',
      orders:[]
    }
  }
  

  save = (event)=>{
      event.preventDefault()
      var ob = {
        order_id : this.oidbox.value,
        vender_id : this.vidbox.value,
      
     }
  var pro = AdminService.orderassign(ob)
      pro.then(response=>response.json())
      .then(data=>{ 
         this.setState({'orders':data.data.result})
      console.log("orders", data.data.result);
     
})
.catch(err=>{
  console.log(err)
})   


    }
  render()
  {
    return(<>
    <section className="section contact-me" data-section="section4">
      <Menu/>
    <div className="container">
      <div className="section-heading">
        <h2 id="headr">PlaceOrder</h2>
        <div className="line-dec"></div>        
      </div>
      <div className="row">
        <div className="right-content">
          <div className="container">
            <form id="contact" 
            onSubmit={this.save}>
              <div className="row">
               
                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                    
                      className="form-control"
                      ref={c=>this.oidbox=c}
                      placeholder="Order ID..."
                      required
                    />
                  </fieldset>
                  <br/> <br/>
                </div>

                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.vidbox=c}
                      placeholder="Vender ID..."
                       required
                    />
                  </fieldset>
                  <br/> <br/>
                </div>

                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      OrderAssign
                    </button>
                  </fieldset>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>)
  }
}