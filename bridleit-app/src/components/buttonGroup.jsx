import React, { Component } from "react";

class ButtonGroup extends Component {
  state = {};

  btnClasses = "btn m-1 py-4 ";

  render() {
    const { handlers, gameRunning } = this.props;
    const { onGotIt, onSkip, onPlay, onRestart, onOptions } = handlers;
    const playButtonClasses = "fa " + (gameRunning ? "fa-pause" : "fa-play");
    const style = { fontSize: "1.6em" };

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              className={this.btnClasses + "btn-success btn-lg btn-block"}
              onClick={onGotIt}
            >
              <i className="fa fa-check" aria-hidden="true" style={style} />
            </button>
          </div>
          <div className="col">
            <button
              className={this.btnClasses + "btn-danger btn-lg btn-block"}
              onClick={onSkip}
            >
              <i
                className="fa fa-window-close"
                aria-hidden="true"
                style={style}
              />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              className={this.btnClasses + "btn-sm btn-block"}
              onClick={onRestart}
            >
              <i className="fa fa-retweet" aria-hidden="true" style={style} />
            </button>
          </div>
          <div className="col text-center">
            <button
              className={this.btnClasses + "btn-sm btn-block"}
              onClick={onPlay}
            >
              <i
                className={playButtonClasses}
                aria-hidden="true"
                style={style}
              />
            </button>
          </div>
          <div className="col text-center">
            <button
              className={this.btnClasses + "btn-sm btn-block"}
              onClick={onOptions}
            >
              <i className="fa fa-gear" aria-hidden="true" style={style} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
