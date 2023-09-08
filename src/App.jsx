import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Applications from "./components/Applications";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar pageTitle="Application Checker Portal" />
        <Applications />
      </>
    );
  }
}

export default App;
