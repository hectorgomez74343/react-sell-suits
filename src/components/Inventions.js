import React from "react";
import Card from "./Card";
import { withRouter } from "react-router-dom";

class Inventions extends React.Component {
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
                  image="/images/applestoreinvention.png"
                />
                <Card
                  title="Food-Dashboard-Invention"
                  text="Click here"
                  image="/images/foodinventiondashboard.png"
                />
                <Card
                  title="Internet-Cable-Phone-Invention"
                  text="Click here"
                  image="/images/internetcablephoneinvention.png"
                />
                <Card
                  title="Suit-Invention"
                  text="Click here"
                  image="/images/suitstore.png"
                />
                <Card
                  title="Video-Game-Invention"
                  text="Click here"
                  image="/images/videogameconsolestore.png"
                />
                <Card
                  title="Medical-Invention"
                  text="Click here"
                  image="/images/dashboardmedicalinvention.png"
                />
                <Card
                  title="AM-Charts-Invention"
                  text="Click here"
                  image="/images/amchartsinventions.png"
                />

                <Card
                  title="3D-Invention"
                  text="Click here"
                  image="/images/3Dtictactoeinvention.png"
                />
                <Card
                  title="Legal-Agreement-Invention"
                  text="Click here"
                  image="/images/legalagreementinvention.png"
                />
                <Card
                  title="Messenger-Invention"
                  text="Click here"
                  image="/images/messengerinvention.png"
                />
                <Card
                  title="Designer-Invention"
                  text="Click here"
                  image="/images/designerinvention.png"
                />
                <Card
                  title="Food-Invention"
                  text="Click here"
                  image="/images/foodpollinvention.png"
                />
                <Card
                  title="Portfolio-Invention"
                  text="Click here"
                  image="/images/portfoliodashboard.png"
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
                src="/images/github.png"
                onClick={this.routeToGitHub}
              />
              <img
                alt="linkedin"
                className="link-to-image"
                src="/images/linkedin.png"
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
