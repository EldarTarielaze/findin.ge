import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import CallIcon from "@material-ui/icons/Call";
import RoomIcon from "@material-ui/icons/Room";
import SubjectIcon from "@material-ui/icons/Subject";

const AgentDetail = () => {
    return (
        <>
            <div className="contentAgent__components">
                <div className="mainContainerDisplayer">
                    <div className="searchSection__container">
                        <input
                            type="text"
                            placeholder="სააგენტოს ძებნა. ჩაწერეთ სააგენტოს დასახელება, ქალაქი, რაიონი, უბანი ან ქუჩა"
                            className="inputAgent__sectionClass"
                        />
                        <SearchIcon className="agentInput__iconSection" />
                    </div>
                    <div className="contentSidebar__sectionAgent">
                        <span className="saagentoebiSpan__className">სააგენტოები</span>
                        <span className="developerSpan__className">დეველოპერები</span>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
                            alt="Facebook"
                            title="Facebook"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Facebook</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">
                                    პალო ალტო, კალიფორნია, Silicon Valley ♥
                  </p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 120
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://i.pinimg.com/originals/ce/af/83/ceaf8384322af790486cff176a0a2f24.png"
                            alt="Microsoft"
                            title="Microsoft"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Microsoft</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">ვაშინგტონი</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 50
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                            alt="Twitter"
                            title="Twitter"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Twitter</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">არ არის მითითებული</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 120
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://i.pinimg.com/originals/b4/14/76/b414768e7af1948afcbafb9bd4b0fd12.png"
                            alt="Instagram"
                            title="Instagram"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Instagram</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">არ არის მითითებული</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 120
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                            alt="Google"
                            title="Google"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Google</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 150
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png"
                            alt="Space X"
                            title="Space X"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Space X</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 90
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/1200px-Apple_Computer_Logo_rainbow.svg.png"
                            alt="Apple"
                            title="Apple"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Apple</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 120
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG9.png"
                            alt="Tesla"
                            title="Tesla"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Tesla</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 140
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                            alt="Amazon"
                            title="Amazon"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Amazon</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 70
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
                            alt="Netflix"
                            title="Netflix"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Netflix</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 80
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png"
                            alt="YouTube"
                            title="YouTube"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">YouTube</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 40
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG34.png"
                            alt="Linkedin"
                            title="Linkedin"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Linkedin</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 80
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"
                            alt="Reddit"
                            title="Reddit"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Reddit</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 90
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="contentForAgentCard">
                        <img
                            src="https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png"
                            alt="Airbnb"
                            title="Airbnb"
                            className="imgAgentLogo"
                        />
                        <div className="containerInformationAgent"></div>
                        <div className="containerInformationForAgent">
                            <p className="paragraphTitle__agent">Airbnb</p>
                            <div className="contentCallInformation__agent">
                                <CallIcon className="agentCall__info" />
                                <p className="paragraphCallAgent__info">+995 555 555</p>
                            </div>
                            <div className="contentLocationInformation__agent">
                                <RoomIcon className="locationAgent__info" />
                                <p className="locationParagraph__agent">Silicon Valley ♥</p>
                            </div>
                            <div className="gancxadebbebiInformation__Age">
                                <SubjectIcon className="gancxadebebiAgent__info" />
                                <p className="yvelaGancxadebaParagraph__info">
                                    ყველა განცხადება 100
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="pagePaginationFor__manyWeb">
                    <div className="paginationWebsite">
                        <span>
                            <i class="fas fa-backward"></i>
                        </span>
                        <span>
                            <i class="fas fa-step-backward"></i>
                        </span>
                        <span className="active__hov">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>...</span>
                        <span>
                            <i class="fas fa-backward rotateInfo"></i>
                        </span>
                        <span>
                            <i class="fas fa-step-backward rotateInfo"></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AgentDetail;