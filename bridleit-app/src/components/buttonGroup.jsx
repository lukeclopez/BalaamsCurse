import React, { Component } from "react";

class ButtonGroup extends Component {
  state = {};

  btnClasses = "btn btn-primary m-1 btn-block ";

  render() {
    return (
      <div>
        <div className="row">
          <button className={this.btnClasses + "btn-lg"}>V</button>
          <button className={this.btnClasses + "btn-lg"}>X</button>
        </div>
        <div className="row">
          <button className={this.btnClasses + "btn-sm"}>></button>
          <button className={this.btnClasses + "btn-sm"}>Q</button>
          <button className={this.btnClasses + "btn-sm"}>O</button>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
