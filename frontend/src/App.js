import React, { useState } from "react";
import QuestForm from "./components/QuestForm";
import ProgramTable from "./components/ProgramTable";

const App = () => {
  const [programData, setProgramData] = useState(null);
  return (
    <div className="container">
      <div className="navbar">Medversity</div>
      {programData === null ? (
        <QuestForm setProgramData={setProgramData} />
      ) : (
        <ProgramTable programData={programData} />
      )}
      {/* <Test /> */}
    </div>
  );
};

export default App;
