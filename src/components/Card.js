import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addOrderType } from "../redux/actions/ordersActions";
import "./Card.css";

class Card extends React.Component {
  routeToScheduler = () => {
    const { title } = this.props;
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
