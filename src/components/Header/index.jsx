import React from "react";
import { NavLink } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";
import { RiPercentLine } from "react-icons/ri";
import { MdOutlinePlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <nav>
            <NavLink to="/">
              <GiFullPizza />
              Menu
            </NavLink>

            <NavLink to="/promotion">
              <RiPercentLine />
              Акции
            </NavLink>

            <NavLink to="/about">
              <MdOutlinePlace />О компании
            </NavLink>
          </nav>
          <div className="phone">
            <div>
              <FaPhone style={{ color: "#f93e03" }} />
              <p>0(702)510707</p>
            </div>
            <div className="hide">
              <p>
                <FaPhone style={{ color: "#f93e03" }} />
                0(552)510707
              </p>
            </div>
            <div className="hide">
              <p>
                <FaPhone style={{ color: "#f93e03" }} />
                0(772)510707
              </p>
            </div>
          </div>
          <div className="account">
            <div className="backet-block">
              <MdShoppingCart style={{ color: "grey", fontSize: "32px" }} />
              <div className="count">1</div>
            </div>
            <div className="btns">
              <button>Вход</button>
              <button>Регистрация</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
