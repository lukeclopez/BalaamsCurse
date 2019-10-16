import React, { Component } from "react";

class ButtonGroup extends Component {
  state = {};

  btnClasses = "btn btn-primary m-1 btn-block ";

  render() {
    const { handlers, gameRunning } = this.props;
    const { onGotIt, onSkip, onPlay, onRestart, onOptions } = handlers;
    const playButtonClasses = "fa " + (gameRunning ? "fa-pause" : "fa-play");

    return (
      <div>
        <div className="row">
          <button className={this.btnClasses + "btn-lg"} onClick={onGotIt}>
            <i className="fa fa-check" aria-hidden="true" />
          </button>
          <button className={this.btnClasses + "btn-lg"} onClick={onSkip}>
            <i className="fa fa-window-close" aria-hidden="true" />
          </button>
        </div>
        <div className="row">
          <button className={this.btnClasses + "btn-sm"} onClick={onPlay}>
            <i className={playButtonClasses} aria-hidden="true" />
          </button>
          <button className={this.btnClasses + "btn-sm"} onClick={onRestart}>
            <i className="fa fa-retweet" aria-hidden="true" />
          </button>
          <button className={this.btnClasses + "btn-sm"} onClick={onOptions}>
            <i className="fa fa-gear" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
