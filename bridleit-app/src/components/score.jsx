import React from "react";
import EdiText from "react-editext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

const Score = ({ teamName, value, isActive, player, onSave }) => {
  const baseClass = "badge badge-pill badge-";
  const activeIndicatorClass = isActive ? "primary" : "secondary";

  if (typeof value == "number") {
    value = value.toString();
  }

  return (
    <div className="container" style={{ fontSize: "1.3em" }}>
      <div className="row">
        <div className="col text-center">
          <span className={baseClass + activeIndicatorClass}>{teamName}</span>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <EdiText
            type="text"
            hint="Edit the score"
            value={value}
            onSave={value => onSave(value, player)}
            editButtonContent={<FontAwesomeIcon icon={faPen} />}
            saveButtonContent={<FontAwesomeIcon icon={faCheck} />}
            cancelButtonContent={<FontAwesomeIcon icon={faBan} />}
            viewContainerClassName="et-center-buttons"
            editButtonClassName="btn btn-primary btn-sm"
            saveButtonClassName="btn btn-primary btn-sm mr-1"
            cancelButtonClassName="btn btn-primary btn-sm"
            viewProps={{
              style: { size: 3 }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Score;
