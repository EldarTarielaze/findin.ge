import React, { useEffect, useState } from "react";
import "./AddContent.css";
import Icon from "./icon.png";
import axios from "axios";
import UserStore from "../Stores/UserStore";

const AddContent = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [kvadrati, setKvadrati] = useState("");
  const [roomcount, setRoomCount] = useState("");
  const [bedroom, setBedRoom] = useState("");
  const [sartuli, setSartuli] = useState("");
  const [description, setDescription] = useState("");

  const [file, setFile] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [imgNames, setImgNames] = useState("");

  const onChange = e => {
    setFile(e.target.files);
    setFilename(e.target.files.name);
  };
  const onSubmit = async e => {
    e.preventDefault();

    const imgM = file.length;

    for (var i = 0; i < imgM; i++) {
      setImgNames(..."names", `${UserStore.ID}_${i + 1}.jpg`);
      var x = new File([file[i]], `${UserStore.ID}_${i + 1}.jpg`, {
        type: file[i].type,
        lastModified: file[i].lastModified,
      });
      const formData = new FormData();
      formData.append("user_id", UserStore.ID);
      formData.append("file", x);
      try {
        const res = await axios.post("/imageupload", formData, {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        });
        setMessage("File Uploaded");
      } catch (err) {
        if (err.response.status === 500) {
          setMessage("There was a problem with the server");
        } else {
          setMessage(err.response.data.msg);
        }
      }
    }
    try {
      await axios
        .post("/create", {
          title: title,
          user_id: UserStore.ID,
          price: price,
          kvadrati: kvadrati,
          roomcount: roomcount,
          bedroom: bedroom,
          sartuli: sartuli,
          description: description,
        })
        .then(res => {
          alert(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const addEmployee = async e => {
    e.preventDefault();
  };

  function toggleClick() {
    const toggleMenu = document.querySelector(".menuAction__contentNav");
    toggleMenu.classList.toggle("activeMenuContentNav");
  }

  return (
    <>
      <div className="navbarContainer">
        <div className="navbarLeftContainer">
          <img
            src={Icon}
            alt="Logo"
            title="Logo"
            className="logoImage__navbar"
          />
          <a
            href="/agent"
            style={{ textDecoration: "none", color: "#000" }}
            className="paragraphLinker"
          >
            სააგენტოები
          </a>
          <p className="paragraphLinker">დეველოპერები</p>
        </div>
        <div className="buttonContentNav">
          <svg
            class="iconAdd__Navbar"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
          </svg>
          <a
            href="/add"
            className="atagfor__profileaddcontainerhref"
            style={{ textDecoration: "none", color: "#000" }}
          >
            დამატება
          </a>
        </div>
        <div className="actionContent__loggedNav">
          <div className="profileContainer__contentNav">
            <img
              src="https://img.icons8.com/color/2x/test-account.png"
              alt=""
              onClick={toggleClick}
            />
          </div>
          <div className="menuAction__contentNav">
            <h3>
              {UserStore.username}
              <br /> <span>მომხმარებელი</span>
            </h3>
            <ul>
              <li>
                <img
                  src="https://img.icons8.com/material-two-tone/2x/user-female-circle.png"
                  alt=""
                />
                ჩემი პროფილი
              </li>
              <li>
                <img
                  src="https://img.icons8.com/plasticine/2x/gear.png"
                  alt=""
                />
                პარამეტრები
              </li>
              <li>
                <img src="https://img.icons8.com/doodle/2x/help.png" alt="" />
                დახმარება
              </li>
              <li onClick={() => this.doLogout()}>
                <img
                  src="https://img.icons8.com/ios-filled/2x/logout-rounded-up.png"
                  alt=""
                />
                გასვლა
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="addContent__agentServices">
        <p className="paragraphAdd__contentUploadedClass">
          განცხადების დამატება
        </p>
        <div className="contentForRight">
          <div className="contentWarning__subTimers">
            საიტზე შესაძლებელია თვეში <strong>3</strong> უფასო განცხადების
            დამატება. ლიმიტის ამოწურვის შემდეგ ყოველი მომდევნო განცხადების
            დამატება ფასიანია და შეადგენს თვეში <strong>0.10</strong> ლარს.
          </div>
          <div className="contentUploadDepartment__containerDIV">
            განცხადების ტიპი
          </div>
          <div className="mainContainerForWidth">
            <div className="selectToUploadingFirstSection__divCont">
              <div className="contentToInformationAdd__container">
                <label className="labelUpload__tipClass">
                  უძრავი ქონების ტიპი
                </label>
                <select
                  name="upload__tipName"
                  id="contentTip__id"
                  className="contentTip__class"
                >
                  <option value="choose">აირჩიე</option>
                  <option value="development">ბინები</option>
                  <option value="saxlebidaagarakebi">
                    სახლები და აგარაკები
                  </option>
                  <option value="komerciulifartebi">კომერციული ფართები</option>
                  <option value="miwisnakvetebi">მიწის ნაკვეთები</option>
                </select>
                <select
                  name="status__developmentName"
                  id="statusDevelopment__id"
                  className="statusDevelopment__class"
                >
                  <option value="choose">აირჩიე</option>
                  <option value="axaliashenebuli">ახალი აშენებული</option>
                  <option value="mshenebare">მშენებარე</option>
                  <option value="dzveliashenebuli">ძველი აშენებული</option>
                </select>
              </div>
              <div className="contentBuyAndOther__contContainer">
                <select
                  name="content__tipName"
                  id="contTip__name__id"
                  className="idTip__cont"
                >
                  <option value="choose">აირჩიე</option>
                  <option value="iyideba">იყიდება</option>
                  <option value="giravdeba">გირავდება</option>
                  <option value="qiravdeba">ქირავდება</option>
                  <option value="qiravdebaDgiurad">ქირავდება დღიურად</option>
                </select>
              </div>
            </div>
            <div className="contentLocation__user">ადგილმდებარეობა</div>
            <div className="locationMap__class">
              <div className="contentForssAnd__Maincontainer">
                <div className="contentMainContainer">
                  <label className="sakadastroKodi__class">
                    საკადასტრო კოდი
                  </label>
                  <input
                    onChange={event => {
                      setTitle(event.target.value);
                    }}
                    type="text"
                    className="sakadastro__className"
                    id="sakadastro__id"
                    name="sakadastro__name"
                    aria-label="საკადასტრო კოდი"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="detailInformation__class"
            id="detailInformation__id"
            name="detailInformation__name"
          >
            დეტალური ინფორმაცია
          </div>
          <div className="detailInformation__selectionsClass">
            <div className="divContainer__Right">
              <p>სართული</p>
              <input
                type="text"
                onChange={event => {
                  setSartuli(event.target.value);
                }}
                className="floorContent__className"
                id="floorContent__id"
                name="floor__name"
              />
            </div>
            <div
              className="divContainer__Right"
              id="floorAll--id"
              name="floorAll__name"
            >
              <p>სართულები სულ</p>
              <input
                type="text"
                className="floorContent__className"
                id="floorAllContentInput__id"
                name="allFloorInput__name"
                aria-label="სართულები სულ"
              />
            </div>
            <div className="divContainer__Right">
              <p>ოთახების რაოდენობა</p>
              <input
                type="text"
                onChange={event => {
                  setRoomCount(event.target.value);
                }}
                className="floorContent__className"
                id="roomContent__id"
                name="roomContent__name"
                aria-label="ოთახების რაოდენობა"
              />
            </div>
            <div className="divContainer__Right">
              <p>საძინებელი</p>
              <input
                type="text"
                onChange={event => {
                  setBedRoom(event.target.value);
                }}
                className="floorContent__className"
                id="roomContent__id"
                name="roomContent__name"
                aria-label="საძინებლების რაოდენობა"
              />
            </div>
          </div>
          <div className="contentFor__questionHome">
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">აივანი</p>
              <input
                type="radio"
                className="inputRadio__content"
                id="infoAivaniID"
                name="no"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="infoAivaniID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="infoAivaniIDCorrect"
                name="no"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="infoAivaniIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ვერანდა</p>
              <input
                type="radio"
                className="inputRadio__content"
                id="infoVerandaID"
                name="no1"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="infoVerandaID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="infoVerandaID"
                name="no1"
                value="yes"
              />
              <label className="contentFor__noRequest" htmlFor="infoVerandaID">
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">სველი წერტილი</p>
              <input
                type="radio"
                className="inputRadio__content"
                id="infoSveliWertiliID"
                name="no2"
                value="no"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="infoSveliWertiliID"
              >
                არა
              </label>
              <input
                type="radio"
                name="no2"
                className="inputRadio__content"
                id="infoSveliWertiliCorrect"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="infoSveliWertiliCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ბუნებრივი აირი</p>
              <input
                type="radio"
                name="no3"
                className="inputRadio__content"
                id="bunebriviAiriID"
                value="no"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="bunebriviAiriID"
              >
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                name="no3"
                id="bunebriviAiriIDCorrect"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="bunebriviAiriIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ტელეფონი</p>
              <input
                type="radio"
                name="no4"
                className="inputRadio__content"
                id="mobilePhoneID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="mobilePhoneID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="mobilePhoneCorrectID"
                name="no4"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="mobilePhoneCorrectID"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ინტერნეტი</p>
              <input
                type="radio"
                name="no5"
                className="inputRadio__content"
                id="internetID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="internetID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                name="no5"
                id="internetIDCorrect"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="internetIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ტელევიზორი</p>
              <input
                type="radio"
                name="no6"
                className="inputRadio__content"
                id="tvID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="tvID">
                არა
              </label>
              <input
                type="radio"
                name="no6"
                className="inputRadio__content"
                id="tvIDCorrect"
                value="yes"
              />
              <label className="contentFor__noRequest" htmlFor="tvIDCorrect">
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">კონდიციონერი</p>
              <input
                type="radio"
                name="no7"
                className="inputRadio__content"
                id="kondicioneriID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="kondicioneriID">
                არა
              </label>
              <input
                type="radio"
                name="no7"
                className="inputRadio__content"
                id="kondicioneriIDCorrect"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="kondicioneriIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ცხელი წყალი</p>
              <input
                type="radio"
                name="no8"
                className="inputRadio__content"
                id="cxeliwyaliID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="cxeliwyaliID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="cxeliwyaliIDCorrect"
                value="yes"
                name="no8"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="cxeliwyaliIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">გათბობა</p>
              <input
                type="radio"
                name="no9"
                className="inputRadio__content"
                id="gatbobaID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="gatbobaID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="gatbobaIDCorrect"
                name="no9"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="gatbobaIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">პარკინგი</p>
              <input
                type="radio"
                className="inputRadio__content"
                id="parkingID"
                name="no10"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="parkingID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="parkingIDCorrect"
                value="yes"
                name="no10"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="parkingIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">სათავსო</p>
              <input
                type="radio"
                name="no11"
                className="inputRadio__content"
                id="satavsoID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="satavsoID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="satavsoIDCorrect"
                name="no11"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="satavsoIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ლიფტი</p>
              <input
                type="radio"
                name="no12"
                className="inputRadio__content"
                id="liftiID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="liftiID">
                არა
              </label>
              <input
                type="radio"
                className="inputRadio__content"
                id="liftiIDCorrect"
                name="no12"
                value="yes"
              />
              <label className="contentFor__noRequest" htmlFor="liftiIDCorrect">
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ბუხარი</p>
              <input
                type="radio"
                name="no13"
                className="inputRadio__content"
                id="buxariID"
                value="no"
              />
              <label className="contentFor__noRequest" htmlFor="buxariID">
                არა
              </label>
              <input
                type="radio"
                name="no13"
                className="inputRadio__content"
                id="buxariIDCorrect"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="buxariIDCorrect"
              >
                კი
              </label>
            </div>
            <br />
            <div className="radioBtnContent">
              <p className="radioBtn__paragraphClass">ავეჯი</p>
              <input
                type="radio"
                name="no14"
                className="inputRadio__content"
                id="avejiID"
                value="no"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="avejiID"
                aria-label="ავეჯი"
              >
                არა
              </label>
              <input
                type="radio"
                name="no14"
                className="inputRadio__content"
                id="avejiIDCorrect"
                value="yes"
              />
              <label
                className="contentFor__noRequest"
                htmlFor="avejiIDCorrect"
                aria-label="ავეჯი"
              >
                კი
              </label>
            </div>
            <br />
          </div>
          <div className="contentMoreInformation__contentDev">
            <div className="contentForMainInformations__cont">
              <div className="contentManyInformation_development">
                <div className="contentInformationDetails">
                  <p className="meterCM__class">ჭერის სიმაღლე (მეტრი)</p>
                  <input
                    type="number"
                    className="floorContent__className"
                    id="cherisSimagle__id"
                    name="cherisSimagle__name"
                  />
                </div>
                <br />
                <div className="contentInformationDetails">
                  <label className="mdgomareobaCheris__class">
                    მდგომარეობა
                  </label>
                  <select
                    name="selectMdgomareobaCheris__name"
                    id="selectMdgomareobaCheris__id"
                    className="mdgomareobaSelect__container"
                  >
                    <option value="choose">აირჩიე</option>
                    <option value="axaligaremontebuli">
                      ახალი გარემონტებული
                    </option>
                    <option value="mimdinareobsremonti">
                      მიმდინარეობს რემონტი
                    </option>
                    <option value="saremonto">სარემონტო</option>
                    <option value="dzveligaremontebuli">
                      ძველი გარემონტებული
                    </option>
                    <option value="tetrikarkasi">თეთრი კარკასი</option>
                    <option value="shavikarkasi">შავი კარკასი</option>
                    <option value="mwvanekarkasi">მწვანე კარკასი</option>
                  </select>
                </div>
                <br />
                <div className="projectContent__selectionClass">
                  <div className="contentInformationDetails">
                    <label className="projectContent__class">პროექტი</label>
                    <select
                      name="project__name"
                      id="project--id"
                      className="projectContainerSelect__class"
                    >
                      <option value="choose">აირჩიე</option>
                      <option value="arastandartuli">არასტანდარტული</option>
                      <option value="tuxarelis">თუხარელის</option>
                      <option value="moskovis">მოსკოვის</option>
                      <option value="qalaquri">ქალაქური</option>
                      <option value="xrushovis">ხრუშოვის</option>
                      <option value="chexuris">ჩეხური</option>
                      <option value="yavlashvilis">ყავლაშვილის</option>
                      <option value="lvovis">ლვოვის</option>
                      <option value="tbilisuriezo">თბილისური ეზო</option>
                      <option value="metromshenis">მეტრომშენის</option>
                    </select>
                  </div>
                </div>
                <div className="manyInformation__contentContainer">
                  დამატებითი ინფორმაცია
                </div>
              </div>
            </div>
            <div className="content__mobilePhone__class">
              <div className="contentInformationForSecondContainer">
                <label className="yourMobilePhone__class">
                  თქვენი მობილურის ნომერი
                </label>
                <select
                  name="mobilePhones__name"
                  id="mobilePhones__id"
                  className="mobilePhones__class"
                  style={{ height: "35px" }}
                >
                  <option value="choose">აირჩიე</option>
                  <option value="598">598</option>
                  <option value="599">599</option>
                  <option value="595">595</option>
                  <option value="591">591</option>
                  <option value="598">598</option>
                  <option value="596">596</option>
                  <option value="551">551</option>
                  <option value="590">590</option>
                  <option value="577">577</option>
                  <option value="593">593</option>
                  <option value="555">555</option>
                  <option value="558">558</option>
                  <option value="597">597</option>
                  <option value="579">579</option>
                  <option value="571">571</option>
                  <option value="574">574</option>
                  <option value="557">557</option>
                  <option value="592">592</option>
                  <option value="514">514</option>
                  <option value="568">568</option>
                  <option value="570">570</option>
                  <option value="588">588</option>
                  <option value="544">544</option>
                  <option value="511">511</option>
                </select>
                <input
                  type="number"
                  className="floorContent__className mtop"
                  id="numberPhone__id"
                  name="numberPhone__name"
                />
              </div>
              <div className="contentInformationForSecondContainer">
                <div className="contentToFlexEnd">
                  <p className="fartiParagraph__class">ფართი</p>
                  <input
                    type="number"
                    onChange={event => {
                      setKvadrati(event.target.value);
                    }}
                    className="fartiContentParagraph__class"
                    id="fartiContent__id"
                    name="fartiContent__name"
                  />
                  <select
                    name="selectFarti"
                    id="SelectFarti__id"
                    className="selectFarti__class"
                  >
                    <option value="m2">მ²</option>
                  </select>
                </div>
              </div>
              <div className="contentInformationForSecondContainer">
                <div className="contentToFlexEnd">
                  <p className="fasiParagraph__class">ფასი</p>
                  <input
                    onChange={event => {
                      setPrice(event.target.value);
                    }}
                    type="number"
                    className="fartiContentParagraph__class"
                    id="paymentID__content"
                    name="paymentContent__name"
                  />
                  <select
                    name="courseForSelling__name"
                    id="courseForSelling__Id"
                    className="courseForSelling__class"
                  >
                    <option value="choose">აირჩიე</option>
                    <option value="gel">ლარი</option>
                    <option value="usd">დოლარი</option>
                    <option value="eur">ევრო</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <label className="commentSection__containerClass">
                აღწერა
              </label>{" "}
              <textarea
                onChange={event => {
                  setDescription(event.target.value);
                }}
                name="textAreaComments__name"
                id="textAreaComments__name"
                className="textAreaContent__class"
                cols="60"
                rows="5"
              ></textarea>
              <br />
              <br />
              <br />
              <br />
              <label className="reestrisAmonawerisBmuli__class">
                რეესტრის ამონაწერის ბმული
              </label>
              <input
                type="text"
                className="floorContent__className"
                style={{ width: "300px" }}
                id="amonaweriReestris__id"
                name="reestrisAmonaweri__name"
              />
            </div>
            <div>
              <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                  <input
                    multiple
                    type="file"
                    className="custom-file-input"
                    onChange={onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Upload"
                  className="btn btn-primary btn-block mt-4"
                />
                <img src={imgSrc} alt="" />

                <div className="contentBtn__add">
                  <a href="/">
                    <button
                      type="submit"
                      className="addBtn__contextClass"
                      id="contentAdd__id"
                      name="contentAdd__name"
                    >
                      დამატება
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContent;
