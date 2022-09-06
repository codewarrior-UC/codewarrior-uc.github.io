import React from 'react'
import AdminService from "./services/AdminService";
import Menu from './Menu'
export default class OrderStatus extends React.Component{
  constructor()
  {
    super()
    this.state={
      msg :'',
      status:[]
    }
  }
  

  save = (event)=>{
      event.preventDefault()
      var ob = {
        req_id : this.ridbox.value,
        status : this.statusbox.value,
       
     }
  var pro = AdminService.orderstatus(ob)
      pro.then(response=>response.json())
      .then(data=>{ 
         this.setState({'status':data.data.result})
      console.log("status", data.data.result);
     
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
        <h2>PlaceOrder</h2>
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
                      ref={c=>this.ridbox=c}
                      placeholder="Request ID..."
                      required
                    />
                  </fieldset>
                </div>

                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.statusbox=c}
                      placeholder="Status..."
                       required
                    />
                  </fieldset>
                </div>

                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      Status
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