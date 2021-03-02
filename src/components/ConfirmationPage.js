import React from "react";
import { withRouter } from "react-router-dom";
import Success from "./success";

class ConfirmationPage extends React.Component {
  routeToMainMenu = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>
              Your food has been ordered! Please pick it up at the restaurant in
              20 minutes!
            </h2>
            <h4 className="phone-number">202-562-6656</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.routeToMainMenu}
              >
                Click to go back to main menu
              </button>
            </div>
            <Success />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConfirmationPage);
