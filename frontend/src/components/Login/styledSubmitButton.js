import React from "react";
import "./Login.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class SubmitButton extends React.Component {
  render() {
    return (
      <div className="submitButton">
        <button
          disabled={this.props.disabled}
          className="btnMainContent__styledComponent"
          name="buttonLogin__name"
          onClick={() => this.props.onClick()}
        >
          <ExitToAppIcon />
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default SubmitButton;
