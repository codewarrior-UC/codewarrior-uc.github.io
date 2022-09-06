import React from "react";
import AdminService from "./services/AdminService";
import './modal.css'
import Menu from "./Menu";
import FindVender from "./FindVender";
export default class UpdateVender extends React.Component {
    constructor()
    {
      super()
      this.state={
        msg :'',
        createemployer:[],
        findvender:[],
      }
    }
    componentDidMount() {
      AdminService.findvender()
        .then((response) => response.json())
        .then((data) => {
          this.setState({ findvender: data.data });
          console.log("data", data.data);
        });
    }
    componentDidCatch(error, _errorInfo) {
      console.log("error--", error);
    }
    componentDidUpdate() {}
  
        save = (event)=>{
        event.preventDefault()
        var ob = {
            first_name : this.fnamebox.value,
            last_name : this.lnamebox.value,
            email : this.emailbox.value,
           // password:this.passbox.value,
            mobile_number : this.mobilebox.value,
          user_id:this.vidbox.value,
        }
    var pro = AdminService.createvender(ob)
    console.log("hello this is OB", ob )

        pro.then(response=>response.json())
        .then(data=>{  this.setState({'createvender':data.data.result})
        console.log("data of vender", data.data)

    })
  .catch(err=>{
    console.log(err)
  })   
  }
  

  handelClick=()=> {
    // setTimeout(()=>{
    //     window.location.reload(1);
    // }, 2500);
    // console.log('page to reload')
  }

  onTodoChange(value) {
    this.setState({
      userId: value,
    });
  }
  
    render()
    {
      return(<>
      
      <section className="section contact-me" data-section="section4" id='menubars'>
        <Menu id="asignmodal"/>
      <div className="container">
        <div className="section-heading">
          <h2 id="headr">Vendor Update</h2>
          <div className="line-dec"></div>        
        </div>
       <FindVender user_id={this.props.user_id}/> 
        <div className="row">
          <div className="right-content">
            <div className="container">
              <form id="contact" 
              onSubmit={this.save}>
                <div className="row">
                  {/* <div className="col-md-6">
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
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        type="text"
                        className="form-control"
                        ref={c=>this.vidbox=c}
                        placeholder="Vender ID..."
                        style={{color:"black"}}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                    <button type="submit" id="form-submit" className="button" onClick={this.handelClick}>
                        Update
                      </button>
                    </fieldset>
                  </div>*/}
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
  






// import React, { Component } from 'react';
// import AdminService from "./services/AdminService";
// import FindVender from "./FindVender"

// export class UpdateVender extends Component {

//     constructor() {
//         super();
//         this.state = {
//           msg: "",
//           createvender: [],
//           findvender:[]
//         };
//       }
//       componentDidMount() { 
//         AdminService.findvender()
//           .then((response) => response.json())
//           .then((data) => {
//             this.setState({ findvender: data.data });
//             console.log("data", data.data);
//           });
//       }
    
//       componentDidCatch(error, _errorInfo) {
//         console.log("error--", error);
//        }
//        componentDidUpdate(){
//        }
//        save = (event) => {
//         event.preventDefault();
//         var ob = {
//         vender_id: this.vidbox.value,
//           first_name: this.fnamebox.value,
//           last_name: this.lnamebox.value,
//           email: this.emailbox.value,
//          password:this.passbox.value,
//           mobile_number: this.mobilebox.value,
//         };
//         var pro = AdminService.createvender(ob);
//         console.log("Employeer id", )
//         pro
//           .then((response) => response.json())
//           .then((data) => {
//             this.setState({ 'createvender': data.data.result });
//             console.log("createvender" ,data.data.result )
    
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       };
    
//       onTodoChange(value) {
//         this.setState({
//           userId: value,
//         });
//         //console.log("value", value);
//       }





//   render() {
//     return (
//       <div>
// <section
//           className="section contact-me"
//           id="menubars"
//           data-section="section4"
//         >
//           <div className="container">
//             <div className="section-heading">
//               <h2 id="headr">Employer Update</h2>
//               <div className="line-dec"></div>
//             </div>
//             <FindVender user_id={this.props.user_id}/>
//             <div className="row">
//               <div className="right-content">
//                 <div className="container">
//                   <form id="contact" onSubmit={this.save}>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

// export default UpdateVender





