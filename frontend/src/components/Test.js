import React from "react";

const Test = () => {
  const url = "http://127.0.0.1:8000/api/get_recommendations/";

  const data = {
    userId: 175,
    ageGroupId: 15,
    requestId: "li25",
    courseId: 445,
    courseName: "Mental Ability",
    score: 20.0,
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
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return <div>Test</div>;
};

export default Test;
