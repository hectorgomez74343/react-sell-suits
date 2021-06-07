import React from "react";
import { withRouter } from "react-router-dom";
import AppleLogo from "../images/applecomputers.jpg";
import DigitalHarmonicLogo from "../images/dh.jpg";
import VertexLogo from "../images/vertex.png";
import ExpressLogo from "../images/expresstwo.png";
import CardConnectLogo from "../images/cardconnect.png";
import ComcastLogo from "../images/comcast.jpeg";
import HexagonLogo from "../images/hexagon.jpg";
import BoozAllenHamiltonLogo from "../images/boozallenhamilton.png";
import InventionsLogo from "../images/inventions.jpg";
import githubLogo from "../images/github.png";
import linkedinLogo from "../images/linkedin.png";

import Card from "./Card";

class IndexPage extends React.PureComponent {
  routeToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hector-gomez-5749831b9/");
  };
  routeToGitHub = () => {
    window.open("https://github.com/hectorgomez74343?tab=repositories");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Cards">
              <h2>Hector Gomez Portfolio</h2>
              <h4 className="phone-number">
                Select an image to be routed to the company I worked for and see
                what I've built.
              </h4>
              <div className="CardGroup">
                <Card title="Apple Inc." text="Click here" image={AppleLogo} />
                <Card
                  title="Digital Harmonic"
                  text="Click here"
                  image={DigitalHarmonicLogo}
                />
                <Card title="Vertex" text="Click here" image={VertexLogo} />
                <Card title="Express" text="Click here" image={ExpressLogo} />
                <Card
                  title="Card Connect"
                  text="Click here"
                  image={CardConnectLogo}
                />
                <Card title="Comcast" text="Click here" image={ComcastLogo} />
                <Card title="Hexagon" text="Click here" image={HexagonLogo} />
                <Card
                  title="Booz Allen Hamilton"
                  text="Click here"
                  image={BoozAllenHamiltonLogo}
                />
                <Card
                  title="Inventions"
                  text="Click here"
                  image={InventionsLogo}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="link-to-flex-box">
              <img
                alt="github"
                id="git-link"
                className="link-to-image"
                src={githubLogo}
                onClick={this.routeToGitHub}
              />
              <img
                alt="linkedin"
                className="link-to-image"
                src={linkedinLogo}
                onClick={this.routeToLinkedIn}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
