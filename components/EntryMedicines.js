import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="medicine" role="img" aria-label="medicine-pic">
          {props.medicine}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;

