import React from "react";
import promotions from "../../assets/SliderImg/Large.png";
import ramadan from "../../assets/SliderImg/Large (1).png";
import cocaCola from "../../assets/SliderImg/Large (2).png";
import { useState } from "react";

const Promotion = () => {
  const [cola, setCola] = useState(false);
  const [iftar, setIftar] = useState(false);
  const [five, setFive] = useState(false);
  return (
    <div id="promotion">
      <div className="container">
        <div className="promotion">
          <div className="promotion-wrap">
            <div className="promotion-wrap__block">
              <img src={promotions} alt="" />
              <h1>ЗАБЕРИТЕ СВОЙ ЗАКАЗ И ПОЛУЧИ СКИДКУ 5%</h1>
              <p>{null}</p>
            </div>
            <div className="promotion-wrap__block">
              <img src={ramadan} alt="" />
              <h1>Ифтар наборы co скидкой</h1>
              <p>{null}</p>
            </div>
            <div className="promotion-wrap__block">
              <img src={cocaCola} alt="" />
              <h1>COCA-COLA В ПОДАРОК!</h1>
              <p>{null}</p>
            </div>
            <div className="promotion-wrap__block">
              <img src={promotions} alt="" />
              <h1>ЗАБЕРИТЕ СВОЙ ЗАКАЗ И ПОЛУЧИ СКИДКУ 5%</h1>
              <p>{null}</p>
            </div>
            <div className="promotion-wrap__block">
              <img src={ramadan} alt="" />
              <h1>Ифтар наборы co скидкой</h1>
              <p>{null}</p>
            </div>
            <div className="promotion-wrap__block">
              <img src={cocaCola} alt="" />
              <h1>COCA-COLA В ПОДАРОК!</h1>
              <p>{null}</p>
            </div>
            <div className="promotion-wrap__block">
              <img src={promotions} alt="" />
              <h1>ЗАБЕРИТЕ СВОЙ ЗАКАЗ И ПОЛУЧИ СКИДКУ 5%</h1>
              <p>{null}</p>
            </div>
            <div className="promotion-wrap__block">
              <img src={ramadan} alt="" />
              <h1>Ифтар наборы co скидкой</h1>
              <p>{null}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
