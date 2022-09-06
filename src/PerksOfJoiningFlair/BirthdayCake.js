import React, { Component } from 'react'

export class BirthdayCake extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h2>BirthdayCake</h2>
          {/* <h3>FORM</h3>
            <h4>-1- dropdown -- -cakesize- [1/2Kg or 1kg]-</h4>
                <h4>text</h4> */}

          <div className="form-group">
            <label htmlFor="bdaycake">Bday Cake</label>
            <select className="form-control" id="bdaycake">
              <option>Select</option>
              <option>Chocolate</option>
              <option>Vanila</option>
              <option>ButterScotch</option>
              <option>Pinapple</option>
            </select>
          </div>
          {/* <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              console.log("HAPPY Birthday");
            }}
          >
            Get your Cake Delivered
          </button> */}
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default BirthdayCake

