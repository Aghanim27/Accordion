import React, { useState } from "react";
import { data } from "./utils/data";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(null);

  const toggleContent = (index) => {
    // setShowContent(index);
    if (index === showContent) {
      setShowContent(null);
      return;
    }
    setShowContent(index);
  };

  return (
    <div>
      <h1 className="mainHeader">Frequently Asked Questions & Answers</h1>
      <div className="mainContainer">
        {data.map((eachData, index) => (
          <div
            className="accordion"
            key={eachData.id}
            onClick={() => toggleContent(index)}
          >
            <div className="title">
              <h3>{eachData.question}</h3>
              <span>{showContent === index ? "-" : "+"}</span>
            </div>
            <div
              className={
                showContent === index
                  ? "content content-visible"
                  : "content content-hidden"
              }
            >
              {eachData.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
