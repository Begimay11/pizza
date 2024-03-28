import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import promotions from "../../assets/SliderImg/Large.png";
import ramadan from "../../assets/SliderImg/Large (1).png";
import cocaCola from "../../assets/SliderImg/Large (2).png";

const DetailPromotion = () => {

  return (
    <div id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail-wrap">
            <div className="detail-wrap__left">
              <h1>
                <FaArrowLeftLong />
                Предыдущая
              </h1>
            </div>
            <div className="detail-wrap__center">
              <img src={cocaCola} alt="" />
              <h1>COCA-COLA В ПОДАРОК!</h1>
              <p>
                Закажите две любых пиццы и получите бутылку Coca-Cola (Sprite,
                Fanta) в подарок (1,5 литра).
              </p>
              <p>
                * акция НЕ действует при заказе двух пицц обмененных на баллы.
              </p>
            </div>
            <div className="detail-wrap__right">
              <h1>
                Следующая
                <FaArrowRightLong />
              </h1>
            </div>
          </div>
          <div className="detail-wrap">
            <div className="detail-wrap__left">
              <h1>
                <FaArrowLeftLong />
                Предыдущая
              </h1>
            </div>
            <div className="detail-wrap__center">
              <img src={promotions} alt="" />
              <h1>ЗАБЕРИТЕ СВОЙ ЗАКАЗ И ПОЛУЧИ СКИДКУ 5%</h1>
              <p>
                Делайте заказы online на сайте и в приложении mypizza.kg или по
                номерам 0 312 51-07-07; 0 551 51-07-07; 0 772 51-07-07.
              </p>
              <p>
                Заберите свой заказ в ближайшем филиале "Империи Пиццы" и
                получите скидку 5%.
              </p>
              <p style={{ fontStyle: " italic" }}>
                Акция действует в любое время суток во всех филиалах "Империи
                Пиццы".
              </p>
              <p>
                Акция не суммируется с другими скидками и специальными
                предложениями компании.
              </p>
            </div>
            <div className="detail-wrap__right">
              <h1>
                Следующая
                <FaArrowRightLong />
              </h1>
            </div>
          </div>
          <div className="detail-wrap">
            <div className="detail-wrap__left">
              <h1>
                <FaArrowLeftLong />
                Предыдущая
              </h1>
            </div>
            <div className="detail-wrap__center">
              <img src={ramadan} alt="" />
              <h1>Ифтар наборы</h1>
              <p>Соберите Ваш набор и оформляйте предзаказ к Ифтару</p>
              <p>Доступны 2 комбо на выбор:</p>
              <p>Комбо 1 за 378 сом</p>
              <p>Суп на выбор: Тофу тай или Чечевичный</p>
              <p>Второе на выбор: Чикен ролл или самсы с курицей</p>
              <p>Комбо 2 за 478 сом</p>
              <p>Суп на выбор: Шорпо или Мампар</p>
              <p>Второе на выбор: Манты с мясом или Гёдза с джусаем и яйцом</p>
              <p>
                К любому комбо, Вы получите подарок - финики, боорсоки, сметану
                и салат Витаминный
              </p>
              <p>
                *на Ифтар наборы не распространяются акции "Afterparty", "скидка
                5% навынос"
              </p>
            </div>
            <div className="detail-wrap__right">
              <h1>
                Следующая
                <FaArrowRightLong />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPromotion;
