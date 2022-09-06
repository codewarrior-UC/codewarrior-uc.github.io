import React from 'react'
import AdminService from "./services/AdminService";
import Menu from './Menu'
import './modal.css'

export default class Vender extends React.Component

{
  constructor()
  {
    super()
    this.state={
      msg :'',
      createvender:[]
    }
  }
  

  save = (event)=>{
      event.preventDefault()
      var ob = {
        first_name : this.fnamebox.value,
       last_name : this.lnamebox.value,
       email : this.emailbox.value,
       password:this.passbox.value,
        mobile_number : this.mobilebox.value,
        vender_id: this.vidbox.value,
     }
  var pro = AdminService.createvender(ob)
      pro.then(response=>response.json())
      .then(data=>{  this.setState({'createvender':data.data.result})
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
    
    <section className="section contact-me" data-section="section4" id='menubars'>
      <Menu/>
    <div className="container">
      <div className="section-heading">
        <h2 id="headr">Vendor Registeration</h2>
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
                      ref={c=>this.fnamebox=c}
                      placeholder="First Name..."
                      style={{color:"black"}}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.lnamebox=c}
                      placeholder="Last Name..."
                      style={{color:"black"}}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      ref={c=>this.emailbox=c}
                      placeholder="Your email..."
                      style={{color:"black"}}
                      required
                    />
                  </fieldset>
                </div>

                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="password"
                      className="form-control"
                      ref={c=>this.passbox=c}
                      placeholder="Password..."
                      style={{color:"black"}}
                      required
                    />
                  </fieldset>
                </div>


                <div className="col-md-12">
                  <fieldset>
                    <input
                      type="phone"
                      className="form-control"
                      ref={c=>this.mobilebox=c}
                      placeholder="Mobile Number..."
                      style={{color:"black"}}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="hidden"
                      className="form-control"
                      ref={c=>this.vidbox=c}
                      placeholder="venderID..."
                      style={{color:"black"}}
                      required
                    />
                  </fieldset>
                </div>

                <div className="col-md-12">
                  <fieldset>
                  <button type="submit" id="form-submit" class="button" onClick={this.handelClick}>
                      Register
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
