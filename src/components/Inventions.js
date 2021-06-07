import React from "react";
import { withRouter } from "react-router-dom";
import appleStoreInvention from "../images/applestoreinvention.png";
import foodInventionDashboard from "../images/foodinventiondashboard.png";
import internetCableInvention from "../images/internetcablephoneinvention.png";
import suitStoreInvention from "../images/suitstore.png";
import videoGameConsoleInvention from "../images/videogameconsolestore.png";
import dashboardMedicalInvention from "../images/dashboardmedicalinvention.png";
import amChartsInvetion from "../images/amchartsinventions.png";
import threeDInvention from "../images/3Dtictactoeinvention.png";
import legalAgreementInvention from "../images/legalagreementinvention.png";
import messengerInvention from "../images/messengerinvention.png";
import designerInvention from "../images/designerinvention.png";
import foodPollInvention from "../images/foodpollinvention.png";
import portfolioDashboardInvention from "../images/portfoliodashboard.png";
import blogInvention from "../images/blog.png";
import githubLogo from "../images/github.png";
import linkedLogo from "../images/linkedin.png";
import Card from "./Card";

class Inventions extends React.PureComponent {
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
              <h2>Inventions</h2>
              <h4 className="phone-number">
                Select an image to be routed to the invention I've created.
              </h4>
              <div className="CardGroup">
                <Card
                  title="Apple-Invention"
                  text="Click here"
                  image={appleStoreInvention}
                />
                <Card
                  title="Food-Dashboard-Invention"
                  text="Click here"
                  image={foodInventionDashboard}
                />
                <Card
                  title="Internet-Cable-Phone-Invention"
                  text="Click here"
                  image={internetCableInvention}
                />
                <Card
                  title="Suit-Invention"
                  text="Click here"
                  image={suitStoreInvention}
                />
                <Card
                  title="Video-Game-Invention"
                  text="Click here"
                  image={videoGameConsoleInvention}
                />
                <Card
                  title="Medical-Invention"
                  text="Click here"
                  image={dashboardMedicalInvention}
                />
                <Card
                  title="AM-Charts-Invention"
                  text="Click here"
                  image={amChartsInvetion}
                />

                <Card
                  title="3D-Invention"
                  text="Click here"
                  image={threeDInvention}
                />
                <Card
                  title="Legal-Agreement-Invention"
                  text="Click here"
                  image={legalAgreementInvention}
                />
                <Card
                  title="Messenger-Invention"
                  text="Click here"
                  image={messengerInvention}
                />
                <Card
                  title="Designer-Invention"
                  text="Click here"
                  image={designerInvention}
                />
                <Card
                  title="Food-Invention"
                  text="Click here"
                  image={foodPollInvention}
                />
                <Card
                  title="Portfolio-Invention"
                  text="Click here"
                  image={portfolioDashboardInvention}
                />
                <Card title="Blog" text="Click here" image={blogInvention} />
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
                src={linkedLogo}
                onClick={this.routeToLinkedIn}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Inventions);
