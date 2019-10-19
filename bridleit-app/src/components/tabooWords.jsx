import React from "react";

const TabooWords = ({ words }) => {
  return (
    <ul style={{ padding: 0 }}>
      {words.map((w, index) => (
        <li key={(w, index)} className="taboo-word">
          {w}
        </li>
      ))}
    </ul>
  );
};

export default TabooWords;
