import React from 'react'
import AdminService from "./AdminService";
import Menu from '../Menu'
export default class Employer extends React.Component

{
  constructor()
  {
    super()
    this.state={
      msg :'',
      CreateAdmin:[]
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
     }
      var pro = AdminService.CreateAdmin(ob)
      pro.then(response=>response.json())
      .then(data=>{
        console.log("CreateAdmin",data.data)
         if(data.data)
        // this.setState({msg:"Register Done !"})

        this.setState({'CreateAdmin':data.data})
        
        else{
          this.setState({msg:" Already Exist !"})
        }
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
    <section className="section contact-me" data-section="section4">
      <Menu/>
    <div className="container">
      <div className="section-heading">
        <h2>Admin Registeration</h2>
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
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="phone"
                      className="form-control"
                      ref={c=>this.mobilebox=c}
                      placeholder="Mobile Number..."
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
