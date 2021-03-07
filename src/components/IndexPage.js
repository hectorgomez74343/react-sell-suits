import React from "react";
import Card from "./Card";
import { withRouter } from "react-router-dom";

class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Cards">
              <h2>Hector Gomez Portfolio</h2>
              <h4 className="phone-number">
                Select an image to be routed to the company I worked for and see
                what I build.
              </h4>
              <div className="CardGroup">
                <Card
                  title="Apple Inc."
                  text="Click here"
                  image="/images/applecomputers.jpg"
                />
                <Card
                  title="Digital Harmonic"
                  text="Click here"
                  image="/images/dh.jpg"
                />
                <Card
                  title="Vertex"
                  text="Click here"
                  image="/images/vertex.png"
                />
                <Card
                  title="Express"
                  text="Click here"
                  image="/images/expresstwo.png"
                />
                <Card
                  title="Card Connect"
                  text="Click here"
                  image="/images/cardconnect.png"
                />
                <Card
                  title="Comcast"
                  text="Click here"
                  image="/images/comcast.jpeg"
                />
                <Card
                  title="Hexagon"
                  text="Click here"
                  image="/images/hexagon.jpg"
                />
                <Card
                  title="Booz Allen Hamilton"
                  text="Click here"
                  image="/images/boozallenhamilton.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
