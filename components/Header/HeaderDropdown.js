import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faBullhorn,
  faCalendar,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderDropdown(props) {
  const { activeTab, setActiveTab } = props;
  return (
    <>
      <div
        id="header__dropdown"
        className={`header__dropdown  ${
          activeTab ? "header__dropdown--active" : ""
        }`}
      >
        <div className="dropdown-item">
          <FontAwesomeIcon className="dropdown-item--icon" icon={faGamepad} />
          <p>Nintendo Switch</p>
        </div>
        <div className="dropdown-item">
          <FontAwesomeIcon className="dropdown-item--icon" icon={faBullhorn} />
          <p>New Releases</p>
        </div>
        <div className="dropdown-item">
          <FontAwesomeIcon className="dropdown-item--icon" icon={faCalendar} />
          <p>Coming Soon</p>
        </div>
        <div className="dropdown-item">
          <FontAwesomeIcon className="dropdown-item--icon" icon={faPlus} />
          <p>Shop Games</p>
        </div>
      </div>
      <div
        onClick={() => setActiveTab(null)}
        className={`dropdown-container ${
          activeTab ? "dropdown-container--active" : ""
        }`}
      ></div>
    </>
  );
}
