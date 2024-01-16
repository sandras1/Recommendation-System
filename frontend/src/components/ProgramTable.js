import React from "react";
import "../App.css";

const ProgramTable = ({ programData }) => {
  return (
    <div className="table-container">
      <div className="table">
        <div className="row header">
          <div className="cell">Program ID</div>
          <div className="cell">Program Name</div>
        </div>
        {programData.map((mov, index) => {
          return (
            <div className="row" key={index}>
              <div className="cell">{mov.programId}</div>
              <div className="cell">{mov.programName}</div>
            </div>
          );
        })}

        {/* <div class="row">
          <div class="cell">482</div>
          <div class="cell">PP482</div>
        </div>
        <div class="row">
          <div class="cell">483</div>
          <div class="cell">PP483</div>
        </div>
        <div class="row">
          <div class="cell">484</div>
          <div class="cell">PP484</div>
        </div>
        <div class="row">
          <div class="cell">487</div>
          <div class="cell">PP487</div>
        </div> */}
      </div>
    </div>
  );
};

export default ProgramTable;
