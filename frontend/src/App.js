import React, { useEffect, useRef, useState } from "react";
import QuestForm from "./components/QuestForm";
import ProgramTable from "./components/ProgramTable";

const App = () => {
  const [programData, setProgramData] = useState(null);
  const [tempScore, setTempScore] = useState(null);
  const [data, setData] = useState(null);
  // const data = {
  //   userId: 175,
  //   courseId: 445,
  //   courseName: "Mental Ability",
  //   assessmentType: "Basic",
  //   category: "Developing",
  //   requestId: "li25",
  //   recommended_programs: [
  //     {
  //       programId: 494,
  //       programName: "PP494: Progressive Mathematics Proficiency",
  //       programDescription:
  //         "Equip yourself with a solid foundation in mathematics by delving into this comprehensive resource that covers all the basics.",
  //     },
  //     {
  //       programId: 495,
  //       programName: "PP495: Intermediate Math Explorer",
  //       programDescription:
  //         "Explore the basics of mathematics in-depth, ensuring you have a thorough grasp of fundamental concepts with this comprehensive guide.",
  //     },
  //     {
  //       programId: 497,
  //       programName: "PP497: Advanced Numerical Fluency Course",
  //       programDescription:
  //         "Master the basics of mathematics effortlessly with an all-encompassing guide designed to cover every essential concept.",
  //     },
  //     {
  //       programId: 499,
  //       programName: "PP499: Math Transition: Intermediate Level",
  //       programDescription:
  //         "Explore the basics of mathematics in-depth, ensuring you have a thorough grasp of fundamental concepts with this comprehensive guide.",
  //     },
  //     {
  //       programId: 500,
  //       programName: "PP500: The Intermediate Math Blueprint",
  //       programDescription:
  //         "Gain a thorough comprehension of the basics of mathematics through this exhaustive resource that covers every essential topic.",
  //     },
  //   ],
  // };
  const myRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(tempScore);
  }, [programData]);
  return (
    <div className="container">
      <div className="navbar">Academics</div>
      {programData === null ? (
        <div>
          <div className="mcq-head-cont">
            <div className="subject">Subject: Mathematics</div>
            <div>Assessment Test ( MCQs )</div>
            <div>Total:10 x 10 = 100 Marks</div>
          </div>
          <QuestForm
            setProgramData={setProgramData}
            setTempScore={setTempScore}
            setData={setData}
          />
        </div>
      ) : (
        <div ref={myRef}>
          <div className="suggested-program-title">
            <div className="score">Score:{tempScore}</div>
            <div>
              Proficiency Level: {data.assessmentType}-{data.category}
            </div>
            <div>
              Here are a few programs that are strongly recommended for you
            </div>
          </div>
          <ProgramTable programData={programData} />
        </div>
      )}
    </div>
  );
};

export default App;
