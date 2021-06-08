import React from "react";
import { withRouter } from "react-router-dom";

import "./Card.css";

class IndexPage extends React.PureComponent {
  state = {
    turn: "Blue",
    cardOne: null,
    cardTwo: null,
    cardThree: null,
    cardFour: null,
    cardFive: null,
    cardSix: null,
    cardSeven: null,
    cardEight: null,
    cardNine: null,
  };

  startOver = () => {
    this.setState({
      turn: "Blue",
      cardOne: null,
      cardTwo: null,
      cardThree: null,
      cardFour: null,
      cardFive: null,
      cardSix: null,
      cardSeven: null,
      cardEight: null,
      cardNine: null,
    });
  };

  setCardColor = (cardNumber) => {
    const { turn } = this.state;

    if (cardNumber === "one") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardOne: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardOne: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "two") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardTwo: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardTwo: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "three") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardThree: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardThree: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "four") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardFour: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardFour: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "five") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardFive: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardFive: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "six") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardSix: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardSix: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "seven") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardSeven: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardSeven: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "eigth") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardEight: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardEight: "#DF740C",
        });
        return null;
      }
    }
    if (cardNumber === "nine") {
      if (turn === "Blue") {
        this.setState({
          turn: "Red",
          cardNine: "#0ef8f8",
        });
        return null;
      }
      if (turn === "Red") {
        this.setState({
          turn: "Blue",
          cardNine: "#DF740C",
        });
        return null;
      }
    }
  };
  render() {
    const {
      cardOne,
      cardTwo,
      cardThree,
      cardFour,
      cardFive,
      cardSix,
      cardSeven,
      cardEight,
      cardNine,
    } = this.state;

    return (
      <div className="Cards">
        <h2>3D Tic Tac Toe</h2>
        <div className="start-over-flex-box ">
          {" "}
          <button className="start-over-button" onClick={this.startOver}>
            Start Over
          </button>
        </div>

        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <div
              onClick={this.setCardColor.bind(this, "one")}
              style={{ backgroundColor: cardOne }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "two")}
              style={{ backgroundColor: cardTwo }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "three")}
              style={{ backgroundColor: cardThree }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "four")}
              style={{ backgroundColor: cardFour }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "five")}
              style={{ backgroundColor: cardFive }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "six")}
              style={{ backgroundColor: cardSix }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "seven")}
              style={{ backgroundColor: cardSeven }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "eigth")}
              style={{ backgroundColor: cardEight }}
              className="Card"
            ></div>
            <div
              onClick={this.setCardColor.bind(this, "nine")}
              style={{ backgroundColor: cardNine }}
              className="Card"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
