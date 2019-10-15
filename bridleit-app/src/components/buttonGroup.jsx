import React, { Component } from "react";

class ButtonGroup extends Component {
  state = {};

  btnClasses = "btn btn-primary m-1 btn-block ";

  render() {
    return (
      <div>
        <div className="row">
          <button className={this.btnClasses + "btn-lg"}>
            <i className="fa fa-check" aria-hidden="true" />
          </button>
          <button className={this.btnClasses + "btn-lg"}>
            <i className="fa fa-window-close" aria-hidden="true" />
          </button>
        </div>
        <div className="row">
          <button className={this.btnClasses + "btn-sm"}>
            <i className="fa fa-play" aria-hidden="true" />
          </button>
          <button className={this.btnClasses + "btn-sm"}>
            <i className="fa fa-recycle" aria-hidden="true" />
          </button>
          <button className={this.btnClasses + "btn-sm"}>
            <i className="fa fa-gear" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
