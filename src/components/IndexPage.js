import React from "react";
import { withRouter } from "react-router-dom";
import suitOneImage from "../images/suitone.webp";
import suitTwoImage from "../images/suittwo.webp";
import suitThreeImage from "../images/suitthree.webp";
import suitFourImage from "../images/suitfour.webp";
import suitFiveImage from "../images/suitfive.webp";
import suitSixImage from "../images/suitsix.webp";

import Card from "./Card";

function IndexPage() {
  return (
    <div className="Cards">
      <h2>Suit Store</h2>
      <div className="Card-Flex-Box">
        <div className="CardGroup">
          <Card
            title="Classic Black Wool-blend Tuxedo"
            text="Click to order"
            image={suitOneImage}
            price="$199"
          />
          <Card
            title="Extra Slim Black Suit"
            text="Click to order"
            image={suitTwoImage}
            price="$199"
          />
          <Card
            title="Extra Slim Solid Gray Suit"
            text="Click to order"
            image={suitThreeImage}
            price="$199"
          />
          <Card
            title="Slim Textured Navy Suit"
            text="Click to order"
            image={suitFourImage}
            price="$199"
          />
          <Card
            title="Classic Textured Gray Suit"
            text="Click to order"
            image={suitFiveImage}
            price="$199"
          />
          <Card
            title="Extra Slim Gray Tech Suit"
            text="Click to order"
            image={suitSixImage}
            price="$199"
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(IndexPage);
