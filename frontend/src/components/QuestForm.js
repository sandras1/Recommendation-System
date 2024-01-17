import React, { useEffect, useState } from "react";
import "../App.css";
import { questions } from "./Database";
const QuizForm = ({ setProgramData, setTempScore, setData }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempScore = 0;
    questions.forEach((question) => {
      if (question.correctAnswer === answers[question.id]) {
        tempScore += 10;
      }
    });
    // setScore(tempScore);
    callApi(tempScore);
  };
  useEffect(() => {
    console.log(score);
  }, [score]);
  // api call
  const callApi = (tempScore) => {
    console.log(tempScore, "callllllll");
    // const url = "http://127.0.0.1:8000/api/get_recommendations/";
    const url =
      "https://api-recommendation-system.demoserver.work/api/get_recommendations/";

    const data = {
      userId: 175,
      ageGroupId: 15,
      requestId: "li25",
      courseId: 445,
      courseName: "Mental Ability",
      score: tempScore,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.recommended_programs);
        setProgramData(data.recommended_programs);
        setData(data);
        console.log(tempScore, "ssssssssssss");
        setTempScore(tempScore);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      {questions.map((question) => (
        <div className="question-container" key={question.id}>
          <div className="question-text">{question.text}</div>
          <div className="choice-container">
            {question.options.map((option) => (
              <div key={option.value} className="choice-box">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  onChange={handleChange}
                  required
                />{" "}
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default QuizForm;
