import React, { Component } from 'react'

export class JoiningKit extends Component {
  render() {
    return (
    <section>
      <h2>JoiningKit</h2>
        {/* joining kit includes
            --DROP DOWN--
            -PRODUCTS-
        1- Name Printed Pen
        2- tumbler
        3- diary
        4- Laptop/pc  */}

<div className="form-group">
    <label htmlFor="bonus">Select ur gift</label>
    <select className="form-control" id="bonus">
      <option>Select</option>
      <option>Pen</option>
      <option>Tumbler</option>
      <option>Diary</option>
    </select>
  </div>
  <br/>   

         {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    what u Want
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Pen</a>
                    <a className="dropdown-item" href="/">Tumbler</a>
                    <a className="dropdown-item" href="/">Diary</a>
                </div>
            </div>     
            <br/>      */}


<div className="form-group">
    <label htmlFor="system">Select your System Type</label>
    <select className="form-control" id="system" onChange={console.log("your system is Laptop congrats")}>
      <option>Select</option>
      <option>Laptop</option>
      <option>desktop</option>
    </select>
  </div>

{/*   <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select your System Type
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Laptop</a>
                    <a className="dropdown-item" href="/">desktop</a>
                   
                </div>
            </div> */}
    </section>
    )
  }
}

export default JoiningKit