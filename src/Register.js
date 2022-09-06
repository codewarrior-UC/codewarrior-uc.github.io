import React from 'react'
import AdminService from "./services/AdminService";

export default class Register extends React.Component
{
  save = (event)=>{
      event.preventDefault()
      var ob = {
        roll_number : this.rollbox.value*1,
        name : this.namebox.value,
        email : this.emailbox.value,
        password : this.phonebox.value,
        gender : this.genderbox.value,
        age : this.agebox.value*1
      }
      var pro = AdminService.saveStudent(ob)
      pro.then(response=>response.json())
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  render()
  {
    return <section className="section contact-me" data-section="section4">
    <div className="container">
      <div className="section-heading">
        <h2>Student Registeration</h2>
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
                      ref={c=>this.rollbox=c}
                      placeholder="Roll Number..."
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.namebox=c}
                      placeholder="Student Name..."
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
                      ref={c=>this.phonebox=c}
                      placeholder="Phone..."
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <select ref={c=>this.genderbox=c} className="form-control">
                      <option>male</option>
                      <option>female</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      type="text"
                      className="form-control"
                      ref={c=>this.agebox=c}
                      placeholder="Age..."
                      required
                    />
                  </fieldset>
                </div>
               
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
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
  }
}