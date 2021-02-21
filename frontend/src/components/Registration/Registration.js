import React, { useState } from "react";
import "./Registration.css";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import axios from "axios";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userSn: "",
      userMail: "",
      userId: "",
      userPnumber: "",
      userPass: "",
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = async e => {
    e.preventDefault();
    console.log(this.state);
    let res = await fetch("/register", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.userName,
        surname: this.state.userSn,
        mail: this.state.userMail,
        idNom: this.state.userId,
        userPnumber: this.state.userPnumber,
        userPass: this.state.userPass,
      }),
    });
    let result = await res.json();
    if (result && result.success) {
      alert(result.msg);
    } else {
      alert(result.msg);
    }
  };

  render() {
    const {
      userName,
      userSn,
      userMail,
      userId,
      userPnumber,
      userPass,
    } = this.state;
    return (
      <>
        <div className="reg__container">
          <div className="reg__container__mod">
            <div className="content__IconClose">
              <Link to="/" className="iconClose__class">
                <CloseIcon className="iconClose__class" />
              </Link>
            </div>
            <p className="bgColor__class">რეგისტრაცია</p>
            <form action="" onSubmit={this.submitHandler}>
              <input
                type="text"
                value={userName}
                onChange={this.changeHandler}
                placeholder="სახელი"
                className="nameRegistration__class"
                id="nameRegistration__id"
                name="userName"
                required
              />
              <input
                type="text"
                value={userSn}
                onChange={this.changeHandler}
                placeholder="გვარი"
                className="surnameRegistration__class"
                id="surnameRegistration__id"
                name="userSn"
                required
              />
              <input
                type="email"
                value={userMail}
                onChange={this.changeHandler}
                placeholder="ელექტრონული ფოსტა"
                className="emailRegistration__class"
                id="emailRegistration__id"
                name="userMail"
                required
              />
              <input
                type="text"
                value={userId}
                onChange={this.changeHandler}
                placeholder="პირადი ნომერი"
                className="privateId__class"
                name="userId"
                id="privateId__id"
              />
              <input
                type="number"
                value={userPnumber}
                onChange={this.changeHandler}
                placeholder="მობილური ტელეფონის ნომერი"
                className="mobileRegistration__class"
                id="mobileRegistration__id"
                name="userPnumber"
                required
              />
              <input
                type="password"
                value={userPass}
                onChange={this.changeHandler}
                placeholder="პაროლი"
                className="passwordRegistration__class"
                id="passwordRegistration__id"
                name="userPass"
                required
              />
              <button
                type="submit"
                className="buttonSubmitContent__class"
                id="buttonSubmitContent__id"
                name="buttonSubmitContent__name"
              >
                რეგისტრაცია
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Registration;
