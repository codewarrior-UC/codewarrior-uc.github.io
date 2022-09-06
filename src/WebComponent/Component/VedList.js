import React from 'react'
import AdminService from "../../services/AdminService";
import Vender from "../../Vender"
import Navbar from '../Nav/Navbar';
import '../../ModalUpdate.css'
export default class VedList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      venderlist : [],
    }
  }
  
  componentDidCatch(error, errorInfo) {  };
 
  componentDidMount()
  {
    AdminService.venderlist()
    .then(response=>response.json()) 
    .then(data =>{this.setState({ 'venderlist':data.data.result})
     
    });
   }
componentDidUpdate(){
  console.log(this.state.venderlist)
}
  render()
  {
    return(<div>
       <section className="section about-me" data-section="section1">
        <Navbar/>
    <div className="container">
      <div className="section-heading">
        <h2>Vender Management </h2>
        <div className="line-dec"></div>       
      </div>  
      <div className="d-flex flex-row-reverse" >
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Vender Registeration
            </button>
             <br/> 
          </div>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            style={{backgroundcolor:"black"}}
          >
            <div className="modal-dialog modal-dialog-centered" role="document" id="offmenu">
              <div className="modal-content">
                <div className="modal-body" id="modalcol">
                  <Vender/>
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
          <br/><br/>
    

      <table className='table'>
        <thead> 
           <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr> 
         </thead> 
        <tbody>
          {this.state.venderlist.map((emp,index)=>{
            console.log('venderlist')  
            return (
              <tr key={index}>
                {/* <td>{emp._id}</td> */}
                <td>{emp.full_name}</td>
                <td>{emp.email}</td>
                <td>{emp.mobile_number}</td>
                <td>{"Active"}</td>
                <td>
                  <tr>
                    <button>Deactive</button>
                  </tr>
                </td>
              </tr>
            );
          })}
         </tbody> 
      </table>    
    </div>
  </section>
  </div>);
  }
}



























// import React from 'react'
// import AdminService from "./services/AdminService";
// import Menu from './Menu'
// export default class VendersList extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       venderlist : [],
    
//     }
//   }

//   componentDidCatch(error, errorInfo) {
   
//   };

//   componentDidMount()
//   {
//     AdminService.venderlist()
//     .then(response=>response.json())
    
     
//      .then(data =>{this.setState({ 'venderlist':data.data.result})
     
//     });
//    }



// componentDidUpdate(){
//   console.log(this.state.venderlist)
// }


//   render()
//   {
//     return(<div>
//        <section className="section about-me" data-section="section1">
//         <Menu/>
//     <div className="container">
//       <div className="section-heading">
//         <h2>Vender List </h2>
//         <div className="line-dec"></div>       
//       </div>  
//       <table className='table'>
//         <thead> 
//            <tr>
//            <th>S. No.</th>
//             <th>ID</th>
//             <th>Full Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Role ID </th>
//           </tr> 
//          </thead> 
//         <tbody>
//           {this.state.venderlist.map((emp,index)=>{
//             console.log('venderlist')  
//             return <tr key={index}>
//                 <td>{index+1}</td>
               
//                 <td>{emp._id}</td>
//                 <td>{emp.full_name}</td>
//                 <td>{emp.email}</td>
//                 <td>{emp.mobile_number}</td>
//                 <td>{emp.role_id}</td>
//             </tr>
//           })}
//          </tbody> 
//       </table>    
//     </div>
//   </section>
//   </div>);
//   }
// }
























