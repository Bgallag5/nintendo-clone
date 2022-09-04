import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faCoins } from "@fortawesome/free-solid-svg-icons";

export default function Advertisement() {
  return (
    <div className="ad ad-text">
      <FontAwesomeIcon className="ad-icon" icon={faTruck} />
      <p className="ad-text-bold">Free Shipping</p>
      <p>on orders $50 or more.</p>
      <p className="underline restrictions">Restrictions apply.</p>
      <FontAwesomeIcon className="ad-icon" icon={faCoins} />
      <p>Earn </p>
      <p className="ad-text-bold underline">My Nintendo Points</p>
      <p> on digital games</p>
    </div>
  );
}
