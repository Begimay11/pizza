import React, { useEffect, useState } from "react";
import img1 from "../../../assets/SliderImg/Large.png";
import img2 from "../../../assets/SliderImg/Large (1).png";
import img3 from "../../../assets/SliderImg/Large (2).png";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";

const Slider = () => {
  const sliderImg = [img2, img1, img3];
  let [ind, setInd] = useState(0);
  let classN = "dot";

  function getNext() {
    if (sliderImg.length - 1 === ind) {
      ind = -1;
    }
    setInd(ind + 1);
  }
  function getPrev() {
    if (ind === 0) {
      ind = 2;
    }
    setInd(ind - 1);
  }
  useEffect(() => {
    const int = setInterval(() => {
      getNext();
    }, 3000);
    return () => clearInterval(int);
  }, [ind]);

  return (
    <div id="slider">
      <div className="container">
        <div className="slider">
          <div className="img-block">
            <div className="arrows">
              <RiArrowLeftSFill
                className="ar1"
                style={{
                  fontSize: "60px",
                  color: "#fff",
                }}
                onClick={getPrev}
              />
            </div>
            <img className="img" src={sliderImg[ind]} alt="" />
            <div className="arrows1">
              <RiArrowRightSFill
                style={{
                  fontSize: "60px",
                  color: "#fff",
                }}
                onClick={getNext}
              />
            </div>
          </div>

          <div className="dots">
            {sliderImg.map((el, index) => (
              <div
                onClick={() => setInd(index)}
                className={ind === index ? classN + " active" : classN}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
