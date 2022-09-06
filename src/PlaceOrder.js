import React from 'react'
import AdminService from "./services/AdminService";
import Menu from './Menu'
export default class PlaceOrder extends React.Component{
  constructor()
  {
    super()
    this.state={
      msg :'',
      placeorders:[]
    }
  }
  

  save = (event)=>{
      event.preventDefault()
      var ob = {
         quantity : this.qbox.value,
        comments : this.cbox.value,
        product_type : this.ptbox.value,
        company_id : this.cidbox.value,
        planned_date:this.pdbox.value,
     }
  var pro = AdminService.placeorder(ob)
      pro.then(response=>response.json())
      .then(data=>{ 
         this.setState({'placeorders':data.data.result})
      console.log("placeorders", data.data.result);
     
})
.catch(err=>{
  console.log(err)
})   
}

handelClick=()=> {
  setTimeout(()=>{
      window.location.reload(1);
  }, 2500);
  console.log('page to reload')
}

  render()
  {
    return(<>
    <section className="section contact-me" id='menubars' data-section="section4">
      <Menu/>
    <div className="container">
      <div className="section-heading">
        <h2 style={{ color: "black" }}>PlaceOrder</h2>
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
                      ref={c=>this.qbox=c}
                      defaultValue="1"
                      placeholder="quantity..."
                      style={{ color: "black" }}
                      required
                    />
                  </fieldset>
                </div>

                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.cbox=c}
                      placeholder="comments..."
                      style={{ color: "black" }}
                       required
                    />
                  </fieldset>
                </div>


                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.ptbox=c}
                      placeholder="product_type..."
                      style={{ color: "black" }}
                       required
                    />
                  </fieldset>
                </div>

                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="date"
                      className="form-control"
                      ref={c=>this.pdbox=c}
                      placeholder="planned_date..."
                      style={{ color: "black" }}
                       required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="hidden"
                      className="form-control"
                      ref={c=>this.cidbox=c}
                      value= {localStorage.getItem("companyId")}
                      placeholder="company_id..."
                      style={{ color: "black" }}
                       required
                    />
                  </fieldset>
                </div>

                {/* <div className="col-md-6">
                  <fieldset>
                    <input
                      type="text"
                      className="form-control"
                      ref={c=>this.sbox=c}
                      placeholder="status..."
                       required
                    />
                  </fieldset>
                </div> */}
                

                <div className="col-md-12">
                  <fieldset>
                  <button type="submit" id="form-submit" class="button"  onClick={this.handelClick}>
                      Order
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