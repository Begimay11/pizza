import React from "react";
import logo from "../../../assets/SliderImg/image.png";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div id="search">
      <div className="container">
        <div className="search">
          <div className="logo-block">
            <img src={logo} alt="" />
            <div className="txt">
              <p>Ресторан</p>
              <h3>ИМПЕРИЯ ПИЦЦЫ</h3>
            </div>
          </div>
          <div className="inp-block">
            <input type="text" />
            <IoSearchOutline
              style={{
                position: "absolute",
                color: "rgb(211, 211, 211)",
                left: "10px",
                top: "20px",

                zIndex: "200",
                fontSize: "30px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
