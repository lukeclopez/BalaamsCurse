import React from "react";

const Score = ({ value, isActive }) => {
  return <span className={isActive && "active-player"}>{value}</span>;
};

export default Score;
