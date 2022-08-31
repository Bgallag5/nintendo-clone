import React from "react";
import Image from "next/image";

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
                <p className="display__path--p">Steward Valley</p>
            </div>
            <div className="display__game">
                <div className="display__game--photos ">
                    <div className="container">
                        <Image className="img" src={require('../../public/images/steward-valley-hero.avif')} alt="steward-valley" layout="fill" />
                    </div>
                </div>
                <div className="display__game--info ">Right</div>
            </div>
        </div>
      </div>
    </div>
  );
}
