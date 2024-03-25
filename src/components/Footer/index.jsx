import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-store">
            <FaGooglePlay style={{ cursor: "pointer" }} />
            <FaAppStore style={{ cursor: "pointer" }} />
          </div>
          <div className="footer-copyright">
            <ul>
              <li>
                <p>© 2002-2024 Империя Пиццы</p>
                <p>Все права защищены</p>
                <p>ОсОО "Империя пиццы"</p>
                <Link>
                  пер. Магнитогорский, дом 16, Бишкек, Чуйская область 720031,
                  Кыргызстан
                </Link>
                <p>
                  Телефон: <Link>0551510707</Link>
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-network">
            <FaFacebookSquare style={{ cursor: "pointer" }} />
            <FaInstagramSquare style={{ cursor: "pointer" }} />
            <FaWhatsappSquare style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
