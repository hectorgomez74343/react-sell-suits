import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addOrderType } from "../redux/actions/ordersActions";
import "./Card.css";

class Card extends React.Component {
  routeToScheduler = () => {
    const { title, history } = this.props;
    if (title === "Apple Inc.") {
      window.open("https://getsupport.apple.com/");
    }
    if (title === "Digital Harmonic") {
      window.open("https://digitalharmonic.com/purepixeltech/");
    }
    if (title === "Vertex") {
      window.open("https://www.vertexinc.com/");
    }
    if (title === "Express") {
      window.open("https://www.express.com/");
    }
    if (title === "Card Connect") {
      window.open("https://cardconnect.com/");
    }
    if (title === "Comcast") {
      window.open("https://corporate.comcast.com/");
    }
    if (title === "Hexagon") {
      window.open("https://hexagon.com/");
    }
    if (title === "Booz Allen Hamilton") {
      window.open("https://www.boozallen.com/");
    }
    if (title === "Apple-Invention") {
      window.open("https://adoring-stonebraker-de43d9.netlify.app/#/");
    }
    if (title === "AM-Charts-Invention") {
      window.open("https://hardcore-blackwell-f07055.netlify.app/#/");
    }
    if (title === "Legal-Agreement-Invention") {
      window.open("https://wonderful-gates-dd54ef.netlify.app/#/");
    }
    if (title === "Messenger-Invention") {
      window.open("https://frosty-torvalds-48d977.netlify.app/#/");
    }
    if (title === "Designer-Invention") {
      window.open("https://nifty-lamarr-6dcda8.netlify.app/#/");
    }
    if (title === "Food-Invention") {
      window.open("https://zealous-cray-1320e9.netlify.app/#/");
    }
    if (title === "Medical-Invention") {
      window.open("https://sad-noyce-f810c7.netlify.app/#/");
    }
    if (title === "Food-Dashboard-Invention") {
      window.open("https://focused-euclid-5087a4.netlify.app/#/");
    }
    if (title === "3D-Invention") {
      window.open("https://epic-carson-7ef4cd.netlify.app/#/");
    }
    if (title === "Internet-Cable-Phone-Invention") {
      window.open("https://musing-brown-09131d.netlify.app/#/");
    }
    if (title === "Portfolio-Invention") {
      history.push("/");
    }
    if (title === "Inventions") {
      history.push("/inventions");
    }
  };

  render() {
    const { image, title, text } = this.props;
    return (
      <div className="Card" onClick={this.routeToScheduler}>
        <img src={image} alt={title} />
        <h3>{text}</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addOrdType: (order) => dispatch(addOrderType(order)),
  };
}
export default withRouter(connect(null, mapDispatchToProps)(Card));
