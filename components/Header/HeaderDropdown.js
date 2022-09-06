import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faBullhorn,
  faCalendar,
  faPlus,
  faChild,
  faPeopleRoof,
  faArrowRightArrowLeft,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function HeaderDropdown(props) {
  const { activeTab, setActiveTab } = props;

  const DropdownContent = () => {
    if (activeTab === "store" || null) {
      return (
        <>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faGamepad} />
            <p>Nintendo Switch</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon
              className="dropdown-item--icon"
              icon={faBullhorn}
            />
            <p>New Releases</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon
              className="dropdown-item--icon"
              icon={faCalendar}
            />
            <p>Coming Soon</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faPlus} />
            <p>Shop Games</p>
          </div>
        </>
      );
    } else if (activeTab === "games") {
      return (
        <>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faGamepad} />
            <p>Nintendo Switch</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon
              className="dropdown-item--icon"
              icon={faBullhorn}
            />
            <p>New Releases</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon
              className="dropdown-item--icon"
              icon={faCalendar}
            />
            <p>Coming Soon</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faPlus} />
            <p>Shop Games</p>
          </div>
        </>
      );
    } else if (activeTab === "switch") {
      return (
        <>
          <div className="dropdown-item ">
            <div className="lineup">
              <Image
                className="img"
                src={require("../../public/images/switch-white.jpg")}
                alt="switch"
                height={65}
                width={80}
              />
              <Image
                className="img"
                src={require("../../public/images/switch-black.jpg")}
                alt="switch"
                height={55}
                width={80}
              />
              <Image
                className="img"
                src={require("../../public/images/switch-color.jpg")}
                alt="switch"
                height={55}
                width={80}
              />
            </div>
            <p>Nintendo Switch Lineup</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon
              className="dropdown-item--icon"
              icon={faArrowRightArrowLeft}
            />
            <p>Compare systems</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faGlobe} />
            <p>Online service</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faGamepad} />
            <p>Accessories</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faPlus} />
            <p>Shop systems</p>
          </div>
        </>
      );
    } else if (activeTab === "news") {
      return <>News</>;
    } else if (activeTab === "play") {
      return (
        <>
          <div className="dropdown-item">
            <FontAwesomeIcon className="dropdown-item--icon" icon={faChild} />
            <p>For kids</p>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon
              className="dropdown-item--icon"
              icon={faPeopleRoof}
            />
            <p>For parents</p>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div
        onClick={() => setActiveTab(null)}
        className={`dropdown-container ${
          activeTab ? "dropdown-container--active" : ""
        }`}
      ></div>
      <div
        id="header__dropdown"
        className={`header__dropdown  ${
          activeTab ? "header__dropdown--active" : ""
        }`}
      >
        <DropdownContent />
      </div>
    </>
  );
}
