import React from "react";
import "../App.css";
import Math1 from "../Assets/math1.jpg";
import Math2 from "../Assets/math2.jpg";
import Math3 from "../Assets/math3.jpg";
import Math4 from "../Assets/math4.jpg";
import Math5 from "../Assets/math5.jpg";
import Math6 from "../Assets/math6.jpg";
import starIcon from "../Assets/star.png";
import pencilIcon from "../Assets/pencil.png";
const ProgramTable = ({ programData }) => {
  const images = [Math1, Math2, Math3, Math4, Math5, Math6];

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  console.log(getRandomImage());
  return (
    <div className="table-container">
      <div className="table">
        {programData.map((mov, index) => {
          return (
            <div className="row-container" key={index}>
              <div className="row-image">
                <img src={getRandomImage()} alt="image" />
              </div>
              <div className="row-content">
                <div className="row-title">{mov.programName}</div>
                <div className="row-description">{mov.programDescription}</div>
                <div className="row-others">
                  <div className="star-image">
                    <label>4.8</label>
                    <img src={starIcon} alt="rating" />
                  </div>
                  <div className="row-course-content">
                    <img src={pencilIcon} alt="edit image" />
                    <div>Course Content</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramTable;
