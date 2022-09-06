import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import DisplaySlider from "./DisplaySlider";
import ESRB from "../ESRB";



export default function GameDisplay() {
  return (
    <div className="display-container">
      <div className="display-background">
        <div className="display">
            <div className="display__path text-regular">
                <p className="display__path--p">Store</p>
                <p className="display__path--p">{">"}</p>
                <p className="display__path--p">Games</p>
                <p className="display__path--p">{">"}</p>
                <p className="display__path--p">Stardew Valley</p>
            </div>
            <div className="display__game">
                <div className="display__game--photos ">
                    <div className="container">
                        <Image className="img" src={require('../../public/images/steward-valley-hero.avif')} alt="steward-valley" layout="fill" />
                    </div>
                    <div className="display__slider">
                        <DisplaySlider />
                    </div>
                    <ESRB />
                    {/* <div className="rating text-small">
                        <div className="rating-photo">
                            <Image className="img" src={require('../../public/images/e-rating.png')} alt="rating" layout="fill" />
                        </div>
                        <div className="rating-text">
                            <p>Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood</p>
                            <p>Users Interact</p>
                        </div>
                    </div> */}
                </div>
                <div className="display__game--info ">
                    <p className="system">Nintendo Switch</p>
                    <h1 className="title">Stardew Valley</h1>
                   <div className="price flex-row items-center">
                   <h1 className="price-price">$14.99</h1>
                   <div className="heart-container">
                   <box-icon className="heart" name="heart" color="red" animation="burst-hover" ></box-icon>
                   </div>
                    </div>
                    <div className="points flex-row">
                    <div className="container">
                        <Image src={require('../../public/images/coin.avif')} alt="gold coin" layout="fill" />
                    </div>
                    <span className="eligible text-small">Eligible for up to <p className="text-regular">{" "} 75 {" "} </p> Gold Points</span>
                    </div>
                    <div className="btn-container">

                    <button className="btn__download text-header"><FontAwesomeIcon icon={faDownload} /> Direct download</button>
                    </div>
                    <p className="text-small">This item will be sint to your system automatically after purchase</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}