import React from "react";
import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  function openLogin() {
    document.getElementById("div__classContainer").style.transform = "translateX(0%)";
  }
  function closeLogin() {
    document.getElementById("div__classContainer").style.transform = "translateX(-100%)";
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunctionSecond() {
    document.getElementById("mySecondDropDown").classList.toggle("show");
    document.getElementById("faRotateSecond").classList.toggle('faRotateTrue');
  }
  function func() {
    var k = document.getElementById("kerdzoSaxliContainer").value;
    document.getElementById("qonebis__tipi").innerHTML = k;
  }
  function funcSecond() {
    var l = document.getElementById("komerciuliSaxliContainer").value;
    document.getElementById("qonebis__tipi").innerHTML = l;
  }
  function funcThird() {
    var q = document.getElementById("miwisNakvetebiContainer").value;
    document.getElementById("qonebis__tipi").innerHTML = q;
  }
  function funcFived() {
    var g = document.getElementById("binaContainerSaxli").value;
    document.getElementById("qonebis__tipi").innerHTML = g;
  }
  function funcSixed() {
    var d = document.getElementById("agarakiContainer").value;
    document.getElementById("qonebis__tipi").innerHTML = d;
  }

  return (
    <>
      <div className="banner">
        <div className="banner__info">
          <p className="ParagraphContentStyle">
            მარტივად ნახე საშენო ბინები
          </p>
          <button className="ButtonContentMaker" onClick={openLogin}>მაჩვენე ბინები</button>
        </div>
        <div className="div__classContainer" id="div__classContainer">
              <div className="Container__showCategories">
                  <h1>იპოვე შენთვის საუკეთესო</h1>
                  <div className="containerForFlexSectionCategories__div">
                  <div className="dropdown" onClick={myFunction}>
  <button className="dropbtn" id="qonebis__tipi">ქონების ტიპი <i style={{fontSize: "15px"}} className="fa" id="faRotate">&#xf107;</i></button>
  <div id="myDropdown" className="dropdown-content">
    <p className="Paragraph__contentForSectionsCategories" >ქონების ტიპი</p>
    <div className="containerButtons">
    <button id="binaContainerSaxli" value="ბინა" onClick={funcFived}>ბინა</button>
    <button id="kerdzoSaxliContainer" value="კერძო სახლი" onClick={func}>კერძო სახლი</button>
    <button id="komerciuliSaxliContainer" value="კომერციული" onClick={funcSecond}>კომერციული</button>
    <button id="miwisNakvetebiContainer" value="მიწის ნაკვეთები" onClick={funcThird}>მიწის ნაკვეთები</button>
    <button id="agarakiContainer" value="აგარაკი" onClick={funcSixed}>აგარაკი</button>
    </div>
    <hr className="hrContainer__paragraphContentSectionCategories" />
    <div className="contentFlexEnd__categoriesSection">
    <button className="saveContainer__forParagraphCategories">შენახვა</button>
    </div>
  </div>
</div>
                <select name="containerGarigebis__tipi" id="garigebisTipi__containerCategories" className="garigebisTipi__containerClassCategories">
                  <option value="garigebisTipi">გარიგების ტიპი</option>
                  <option value="iyideba">იყიდება</option>
                  <option value="qiravdeba">ქირავდება</option>
                  <option value="giravdeba">გირავდება</option>
                  <option value="qiravdebaDgiurad">ქირავდება დღიურად</option>
                </select>
              </div>
          </div>
      </div>
      </div>
    </>
  );
};
export default Banner;
