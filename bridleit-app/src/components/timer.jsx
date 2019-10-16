import React, { Component } from "react";

class Timer extends Component {
  state = {
    remainingTime: this.props.startingTime
  };

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    const { remainingTime } = this.state;
    const { startingTime, onTimeOut, timerActive } = this.props;

    if (timerActive) {
      if (remainingTime < 1) {
        this.setState({ remainingTime: startingTime });
        onTimeOut();
      } else {
        const newTime = remainingTime - 1;
        this.setState({ remainingTime: newTime });
      }
    }
  };

  render() {
    const { remainingTime } = this.state;
    return <h1>{remainingTime}</h1>;
  }
}

export default Timer;
