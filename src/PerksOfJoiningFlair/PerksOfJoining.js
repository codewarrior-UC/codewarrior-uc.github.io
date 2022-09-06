import React, { Component } from "react";
import Navbar from "../WebComponent/Nav/Navbar";
import Anniversary from "./Anniversary";
import BirthdayCake from "./BirthdayCake";
import JoiningKit from "./JoiningKit"
// import Menu from '../Menu'
export class PerksOfJoining extends Component {
  render() {
    return (
        <>
          <form>
            <div className="container text-center " style={{paddingLeft: "21%", height:"100vh",color:"white", paddingTop:"100px"}} >
              {/* <Menu/> */}
              <Navbar/>
              <div className="row "  style={{paddingtop:'50px'}}>
                <div className="col-sm xyzz ">
                  <JoiningKit />
                </div>
                <div className="col-sm xyzz">
                  <BirthdayCake />
                </div>
                <div className="col-sm xyzz">
                  <Anniversary />
                </div>
                <br />
                <br />

              </div>
              <div className="text-center">
                <br />
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    console.log("DONE WITH TH PROCESS");
                  }}
                >
                  Submit Response
                </button>
                <br />
                <br />
              </div>
            </div>
          </form>
        </>
    );
  }
}

export default PerksOfJoining;
