import React from 'react';

const PlanCard = (props) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={props.imgurl} alt={props.title} style={{ width: "20rem",padding:"2rem" }} />
        <h4 className="mx-4 my-3">{props.title}</h4>
        <div className="card-body">
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
