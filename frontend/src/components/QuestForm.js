import React, { useEffect, useState } from "react";
import "../App.css";

const QuizForm = ({ setProgramData }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: "q1",
      text: "If the following numbers are arranged in the descending order, what will be the middle digit of the number which will be exactly in the middle 317, 493, 283, 269, 875, 423, 725",
      options: [
        { value: "A", label: "2" },
        { value: "B", label: "3" },
        { value: "C", label: "6" },
        { value: "D", label: "7" },
      ],
      correctAnswer: "A",
    },
    {
      id: "q2",
      text: "In a certain code language, 'MAN' is coded as 28 and ‘GIRL’ is coded as 46, then ‘WOMEN will be coded as",
      options: [
        { value: "A", label: "69" },
        { value: "B", label: "70" },
        { value: "C", label: "80" },
        { value: "D", label: "83" },
      ],
      correctAnswer: "B",
    },
    {
      id: "q3",
      text: "Which of the following CANNOT be formed from the letters of the given word ATTRIBUTABLE?",
      options: [
        { value: "A", label: "BATTER" },
        { value: "B", label: "TRIAL" },
        { value: "C", label: "EAT" },
        { value: "D", label: "ATTITUDE" },
      ],
      correctAnswer: "D",
    },
    {
      id: "q4",
      text: "Arrange the given words as they are arranged in the dictionary.",
      options: [
        { value: "A", label: "2,3,4,5,1" },
        { value: "B", label: "4,5,3,2,1" },
        { value: "C", label: "4,3,2,1,5" },
        { value: "D", label: "4,5,3,1,2" },
      ],
      correctAnswer: "D",
    },
    {
      id: "q5",
      text: "Five girls took part in a race. Beena finished before Priya but behind Latika. Garima finished before Zarrin but behind Priya. Who won the race?",
      options: [
        { value: "A", label: "Beena" },
        { value: "B", label: "Garima" },
        { value: "C", label: "Latika" },
        { value: "D", label: "Priya" },
      ],
      correctAnswer: "C",
    },
    {
      id: "q6",
      text: "Tarun ranked 6th in a class of 35 students. What is his rank from the bottom of the class?",
      options: [
        { value: "A", label: "39th" },
        { value: "B", label: "30th" },
        { value: "C", label: "28th" },
        { value: "D", label: "31st" },
      ],
      correctAnswer: "B",
    },
    {
      id: "q7",
      text: "The product of 214 and a number is X. Taking 49 away from X gives 1449. Find the number.",
      options: [
        { value: "A", label: "7" },
        { value: "B", label: "9" },
        { value: "C", label: "1498" },
        { value: "D", label: "1640" },
      ],
      correctAnswer: "A",
    },
    {
      id: "q8",
      text: "I am an even number. You will find me if you count in 7s. I am less than 100. I am more than 80. Who am I?",
      options: [
        { value: "A", label: "72" },
        { value: "B", label: "84" },
        { value: "C", label: "96" },
        { value: "D", label: "82" },
      ],
      correctAnswer: "B",
    },
    {
      id: "q9",
      text: "The sum of 3.298, 4.085, and 17.8 is",
      options: [
        { value: "A", label: "7.561" },
        { value: "B", label: "9.163" },
        { value: "C", label: "25.183" },
        { value: "D", label: "28.291" },
      ],
      correctAnswer: "C",
    },
    {
      id: "q10",
      text: "Find the wrong term in the given series. XlM W2N V30 04Q T5Q",
      options: [
        { value: "A", label: "W2N" },
        { value: "B", label: "V30" },
        { value: "C", label: "U4Q" },
        { value: "D", label: "T5Q" },
      ],
      correctAnswer: "C",
    },
  ];

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
    setScore(tempScore);
    callApi();
  };
  useEffect(() => {
    console.log(score);
  }, [score]);
  // api call
  const callApi = () => {
    const url = "http://127.0.0.1:8000/api/get_recommendations/";

    const data = {
      userId: 175,
      ageGroupId: 15,
      requestId: "li25",
      courseId: 445,
      courseName: "Mental Ability",
      score: score,
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
