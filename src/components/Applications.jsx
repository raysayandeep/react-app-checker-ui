import PropTypes from "prop-types";
import React, { Component } from "react";
import fdata from "../data/applist.json";
import Appdetails from "./Appdetails";

export class Applications extends Component {
  static propTypes = {};

  applist = fdata;
  constructor(props) {
    super(props);
    //console.log(this.applist);
    this.state = {
      applist: this.applist,
    };
    console.log(typeof this.applist);
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{ width: "12%" }}>
                  Application ID
                </th>
                <th scope="col" style={{ width: "18%" }}>
                  Application Name
                </th>
                <th scope="col" style={{ width: "50%" }}>
                  Application Description
                </th>
                <th scope="col" style={{ width: "20%" }}></th>
              </tr>
            </thead>
          </table>
          {this.state.applist.map((element) => {
            return (
              <div key={element.app_id}>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td style={{ width: "12%" }}>{element.app_id}</td>
                      <td style={{ width: "18%" }}>{element.app_name}</td>
                      <td style={{ width: "50%" }}>
                        {element.app_description}
                      </td>
                      <td style={{ width: "20%" }} align="center">
                        <a href="/details" className="nav-link">
                          Show Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
        <Appdetails />
      </>
    );
  }
}

export default Applications;
