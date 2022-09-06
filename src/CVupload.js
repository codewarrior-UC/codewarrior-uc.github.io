import React from 'react'
import AdminService from "./services/AdminService";
import Menu from './Menu'
export default class CVupload extends React.Component{
  constructor()
  {
    super()
    this.state={
      msg :'',
      upload:[]
    }
  }
  

  save = (event)=>{
      event.preventDefault()
      var ob = {
        file : this.filebox.value,
        company_id : this.cidbox.value,
       
     }
  var pro = AdminService.csvupload(ob)
      pro.then(response=>response.json())
      .then(data=>{ 
         this.setState({'upload':data.data.result})
      console.log("upload", data.data.result);
     
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
        <h2>CSV Upload</h2>
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
                      type="file"
                      className="form-control"
                      ref={c=>this.filebox=c}
                      placeholder=" File Upload..."
                      required
                    />
                  </fieldset>
                </div>

                <div className="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      className="form-control"
                      ref={c=>this.cidbox=c}
                      placeholder="Company ID..."
                       required
                    />
                  </fieldset>
                </div>

                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      Upload
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