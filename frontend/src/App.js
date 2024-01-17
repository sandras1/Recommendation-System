import React, { useEffect, useRef, useState } from "react";
import QuestForm from "./components/QuestForm";
import ProgramTable from "./components/ProgramTable";

const App = () => {
  const [programData, setProgramData] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programData]);
  return (
    <div className="container">
      <div className="navbar">Academics</div>
      {programData === null ? (
        <div>
          <div className="mcq-head-cont">
            <div>Assessment Test ( MCQs )</div>
            <div>Total:10 x 10 = 100 Marks</div>
          </div>
          <QuestForm setProgramData={setProgramData} />
        </div>
      ) : (
        <div ref={myRef}>
          <div className="suggested-program-title">
            Here are a few programs that are strongly recommended for you
          </div>
          <ProgramTable programData={programData} />
        </div>
      )}
    </div>
  );
};

export default App;
