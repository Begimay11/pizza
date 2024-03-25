import React, { useState } from "react";
import { LuShoppingBasket } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const Menu = () => {
  const [heart, setHeart] = useState(false);
  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          <h1>pizza</h1>
          <div className="menu-wrap">
            <div className="menu-wrap__block">
              <center>
                <img
                  src="https://media.dodostatic.net/image/r:584x584/11EE7D6014AA98A0A02B23B5E9087E2C.webp"
                  alt=""
                />
              </center>
              <h4>Деревенская </h4>
              <p>
                Моцарелла, картофель из печи, соленые огурчики, цыпленок, соус
                ранч, томаты, красный лук, чеснок сухой, томатный соус
              </p>
              <div className="menu-wrap__block-price">
                <h3>от 475сом</h3>
                <div
                  className="menu-wrap__block-shop"
                  style={{ display: "flex", gap: "10px" }}>
                  <LuShoppingBasket style={{ fontSize: "30px" }} />
                  <CiHeart
                    style={{
                      fontSize: "30px",
                      display: !heart ? "block" : "none ",
                    }}
                    onClick={() => setHeart(true)}
                  />
                  <IoMdHeart
                    onClick={() => setHeart(false)}
                    style={{
                      fontSize: "30px",
                      color: "red",
                      display: !heart ? "none" : "block",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="menu-wrap__block">
              <center>
                <img
                  src="https://media.dodostatic.net/image/r:584x584/11EE7D6014AA98A0A02B23B5E9087E2C.webp"
                  alt=""
                />
              </center>
              <h4>Деревенская </h4>
              <p>
                Моцарелла, картофель из печи, соленые огурчики, цыпленок, соус
                ранч, томаты, красный лук, чеснок сухой, томатный соус
              </p>
              <div className="menu-wrap__block-price">
                <h3>от 475сом</h3>
                <div
                  className="menu-wrap__block-shop"
                  style={{ display: "flex", gap: "10px" }}>
                  <LuShoppingBasket style={{ fontSize: "30px" }} />
                  <CiHeart
                    style={{
                      fontSize: "30px",
                      display: !heart ? "block" : "none ",
                    }}
                    onClick={() => setHeart(true)}
                  />
                  <IoMdHeart
                    onClick={() => setHeart(false)}
                    style={{
                      fontSize: "30px",
                      color: "red",
                      display: !heart ? "none" : "block",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="menu-wrap__block">
              <center>
                <img
                  src="https://media.dodostatic.net/image/r:584x584/11EE7D6014AA98A0A02B23B5E9087E2C.webp"
                  alt=""
                />
              </center>
              <h4>Деревенская </h4>
              <p>
                Моцарелла, картофель из печи, соленые огурчики, цыпленок, соус
                ранч, томаты, красный лук, чеснок сухой, томатный соус
              </p>
              <div className="menu-wrap__block-price">
                <h3>от 475сом</h3>
                <div
                  className="menu-wrap__block-shop"
                  style={{ display: "flex", gap: "10px" }}>
                  <LuShoppingBasket style={{ fontSize: "30px" }} />
                  <CiHeart
                    style={{
                      fontSize: "30px",
                      display: !heart ? "block" : "none ",
                    }}
                    onClick={() => setHeart(true)}
                  />
                  <IoMdHeart
                    onClick={() => setHeart(false)}
                    style={{
                      fontSize: "30px",
                      color: "red",
                      display: !heart ? "none" : "block",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="menu-wrap__block">
              <center>
                <img
                  src="https://media.dodostatic.net/image/r:584x584/11EE7D6014AA98A0A02B23B5E9087E2C.webp"
                  alt=""
                />
              </center>
              <h4>Деревенская </h4>
              <p>
                Моцарелла, картофель из печи, соленые огурчики, цыпленок, соус
                ранч, томаты, красный лук, чеснок сухой, томатный соус
              </p>
              <div className="menu-wrap__block-price">
                <h3>от 475сом</h3>
                <div
                  className="menu-wrap__block-shop"
                  style={{ display: "flex", gap: "10px" }}>
                  <LuShoppingBasket style={{ fontSize: "30px" }} />
                  <CiHeart
                    style={{
                      fontSize: "30px",
                      display: !heart ? "block" : "none ",
                    }}
                    onClick={() => setHeart(true)}
                  />
                  <IoMdHeart
                    onClick={() => setHeart(false)}
                    style={{
                      fontSize: "30px",
                      color: "red",
                      display: !heart ? "none" : "block",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="menu-wrap__block">
              <center>
                <img
                  src="https://media.dodostatic.net/image/r:584x584/11EE7D6014AA98A0A02B23B5E9087E2C.webp"
                  alt=""
                />
              </center>
              <h4>Деревенская </h4>
              <p>
                Моцарелла, картофель из печи, соленые огурчики, цыпленок, соус
                ранч, томаты, красный лук, чеснок сухой, томатный соус
              </p>
              <div className="menu-wrap__block-price">
                <h3>от 475сом</h3>
                <div
                  className="menu-wrap__block-shop"
                  style={{ display: "flex", gap: "10px" }}>
                  <LuShoppingBasket style={{ fontSize: "30px" }} />
                  <CiHeart
                    style={{
                      fontSize: "30px",
                      display: !heart ? "block" : "none ",
                    }}
                    onClick={() => setHeart(true)}
                  />
                  <IoMdHeart
                    onClick={() => setHeart(false)}
                    style={{
                      fontSize: "30px",
                      color: "red",
                      display: !heart ? "none" : "block",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
