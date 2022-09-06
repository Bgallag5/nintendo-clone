import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faHeart,
  faUser,
  faGamepad,
  faStar,
  faHatWizard,
  faMessage,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import HeaderDropdown from "./HeaderDropdown";
import Logo from "../Logo";

export default function Header() {
  const [activeTab, setActiveTab] = useState(null);


  const handleSetActiveTab = (e) => {
    if (activeTab === e.target.value) {
      setActiveTab(null);
    } else {
      setActiveTab(e.target.value);
    }
  };

  return (
    <div className="header-container">
      <div className="header flex-col">
        <div className="header__top flex-row">
          <div className="logo">

          <Logo id={"header-logo"}/>
          </div>
          <div className="header-search">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="header-search--input"
              placeholder="Search games, hardware, news, etc"
            ></input>

            <span className="categories">
              <select
                className="header-search--select text-regular"
                placeholder="All Categories"
              >
                <option defaultChecked={true}>All Categories</option>
                <option>Games</option>
                <option>Hardware</option>
              </select>
              <FontAwesomeIcon className="dropdown-caret" icon={faAngleDown} />
            </span>
          </div>
          <div className="header-links ">
            <ul className="header-links--nav text-regular">
              <li className="header-link">
                <FontAwesomeIcon icon={faQuestionCircle} /> Support
              </li>
              <li className="header-link">
                <FontAwesomeIcon icon={faHeart} /> Wish List
              </li>
              <li className="header-link">
                <FontAwesomeIcon icon={faCartShopping} /> Cart
              </li>
              <li className="header-link">
                <FontAwesomeIcon icon={faUser} /> Log in/Sign up
              </li>
            </ul>
          </div>
        </div>

        <div className="header__bottom flex-row">
          <span className="header__bottom--item text-subheader">
            <input
              checked={activeTab === "store"}
              onClick={(e) => handleSetActiveTab(e)}
              value="store"
              className="header__checkbox"
              type="checkbox"
            />
            <FontAwesomeIcon className="dropdown-icon" icon={faUser} />
            <p>My Nintendo Store</p>
            <FontAwesomeIcon className="dropdown-caret" icon={faAngleDown} />
          </span>
          <span className="header__bottom--item text-subheader">
            <input
              checked={activeTab === "games"}
              onClick={(e) => handleSetActiveTab(e)}
              value="games"
              className="header__checkbox"
              type={"checkbox"}
            />
            <FontAwesomeIcon className="dropdown-icon" icon={faHatWizard} />
            <p>Games</p>
            <FontAwesomeIcon className="dropdown-caret" icon={faAngleDown} />
          </span>
          <span className="header__bottom--item text-subheader">
            <input
              checked={activeTab === "switch"}
              onClick={(e) => handleSetActiveTab(e)}
              value="switch"
              className="header__checkbox"
              type={"checkbox"}
            />
            <FontAwesomeIcon className="dropdown-icon" icon={faGamepad} />
            <p>Nintendo Switch</p>
            <FontAwesomeIcon className="dropdown-caret" icon={faAngleDown} />
          </span>
          <span className="header__bottom--item text-subheader">
            <input
              checked={activeTab === "news"}
              onClick={(e) => handleSetActiveTab(e)}
              value="news"
              className="header__checkbox"
              type={"checkbox"}
            />
            <FontAwesomeIcon className="dropdown-icon" icon={faMessage} />
            <p>News and Events</p>
            <FontAwesomeIcon className="dropdown-caret" icon={faAngleDown} />
          </span>
          <span className="header__bottom--item text-subheader">
            <input
              checked={activeTab === "play"}
              onClick={(e) => handleSetActiveTab(e)}
              value="play"
              className="header__checkbox"
              type={"checkbox"}
            />
            <FontAwesomeIcon className="dropdown-icon" icon={faStar} />
            <p>Play Nintendo</p>
            <FontAwesomeIcon className="dropdown-caret" icon={faAngleDown} />
          </span>
        </div>
      </div>
      <HeaderDropdown activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
