import React from "react";

const Score = ({ value, isActive }) => {
  return <span className={isActive ? "active-player" : null}>{value}</span>;
};

export default Score;
