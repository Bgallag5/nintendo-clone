import React from "react";
import Image from "next/image";

export default function ESRB() {
  return (
    <div className="rating text-small">
      <div className="rating-photo">
        <Image
          className="img"
          src={require("../public/images/e-rating.png")}
          alt="rating"
          layout="fill"
        />
      </div>
      <div className="rating-text">
        <p>
          Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling,
          Mild Language, Mild Blood
        </p>
        <p>Users Interact</p>
      </div>
    </div>
  );
}
