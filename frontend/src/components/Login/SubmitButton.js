import React from "react";
import "./Login.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class SubmitButton extends React.Component {
  render() {
    return (
      <div className="submitButton">
        <button
          disabled={this.props.disabled}
          className="buttonLogin__className"
          id="buttonLogin__id"
          name="buttonLogin__name"
          onClick={() => this.props.onClick()}
        >
          <svg
            class="closeIconSsd__Sds"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
          </svg>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default SubmitButton;
