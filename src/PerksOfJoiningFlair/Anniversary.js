import React, { Component } from 'react'

export class Anniversary extends Component {
  render() {
    return (
      
        <section>
        <div className="container">
      <h2>Anniversary Cake</h2>
      <div className="form-group">
            <label htmlFor="aniversarycake">Bday Cake</label>
            <select className="form-control" id="aniversarycake" onChange={console.log("your anniversay cake is on us")}>
              <option>Select</option>
              <option>Chocolate</option>
              <option>Vanila</option>
              <option>ButterScotch</option>
              <option>Pinapple</option>
            </select>
          </div>
            {/* <h2>Anniversary</h2>
        <p>-dropdown-</p>
        <p>Anniversary cake</p>
        <p>dinner at nearest restorant</p> */}
            {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select your cake
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">None</a>
                    <a className="dropdown-item" href="/">Chocolate</a>
                    <a className="dropdown-item" href="/">Vanila</a>
                    <a className="dropdown-item" href="/">ButterScotch</a>
                    <a className="dropdown-item" href="/">Pinapple</a>
                </div>
                <br/>
                <br/>
            </div>*/}
            {/* <button type="submit" className="btn btn-primary" onClick={()=>{console.log("HAPPY Anniversary")}}>Get your Cake Delivered</button> */}
      </div> 
      <br/><br/>
      </section>
    
    )
  }
}

export default Anniversary