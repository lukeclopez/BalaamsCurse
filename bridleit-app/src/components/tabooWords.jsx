import React from "react";

const TabooWords = ({ words }) => {
  return (
    <div>
      <ul>
        {words.map(w => (
          <li key={w} className="list-group-item">
            {w}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabooWords;
