import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Timer = ({ remainingTime }) => {
  return (
    <>
      <span className="timer">
        <FontAwesomeIcon icon={faClock} />
        {remainingTime}
      </span>
    </>
  );
};

export default Timer;
