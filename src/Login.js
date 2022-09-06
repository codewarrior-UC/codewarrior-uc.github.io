import React from 'react'
import { Navigate} from 'react-router-dom';
import AdminService from "./services/AdminService";
import './Login.css'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '',
      role_id: false,
      _id:false,
    }
  }
  login = (event) => {
    var ob = {
      email: this.emailbox.value,
      password: this.passbox.value
    }
    AdminService.AdminLogin(ob)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.success) {
          this.setState({ role_id: true })
          this.setState({ role_id: data.data.role_id })
          console.log("login success")
          console.log("data.role_id",data.data.role_id);
          localStorage.setItem('token', data.data.token)

          localStorage.setItem("companyId", data.data.company_id)
          console.log("companyId",data.data.company_id)

localStorage.getItem("companyId", data.data.company_id)
        }
        else
          this.setState({ msg: "Invalid Email or Password !" })
      })
      .catch(err => {
        console.log(err)
      })
    event.preventDefault()
  }
  render() {
console.log('this.state.role_id',this.state.role_id)

    if (this.state.role_id===1)
       return <Navigate to="/Orderlist" />
      
      else if (this.state.role_id===2)
     return <Navigate to="/Home"/>

     else if (this.state.role_id===5)
     return <Navigate to="/VenderRout"/>
    else
      return <section className="section contact-me" data-section="section4">
        <div className="container" style={{paddingtop:"140px"}}>
          <div className="section-heading">
            <h2 id='heading'>Admin Login</h2>
            <div className="line-dec" id='logindec'></div>
          </div>
          <div className="row" id='adminsection'>
            <div className="right-content">
              <div className="container" style={{paddingtop:"1px"}}>
                <form id="contact" onSubmit={this.login}>
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          className="form-control"
                          ref={c => this.emailbox = c}
                          placeholder="Email..."
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          type="password"
                          className="form-control"
                          ref={c => this.passbox = c}
                          placeholder="Password..."
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">
                          Login
                        </button>
                        &nbsp;
                        <b className='text-danger'>{this.state.msg}</b>
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
