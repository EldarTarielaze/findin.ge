import React from 'react';
import './ForgotPassword.css';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return(
        <>
            <div className="contentForgotPassword__container">
                <div className="contentBG">
                <div className="content__paragraphsForgot">
                    <Link to="/" className="closeIcon__forReturn"><CloseIcon className="closeIcon__forReturn" /></Link>
                    <p className="returnAccountParagraph__class">მონაცემების აღდგენის მეთოდი</p>
                    <p className="documentReturn__paragraphClass">აირჩიეთ დოკუმენტი</p>
                    <p className="returnDocumentParagraph__class">რომლითაც გსურთ მონაცემების აღდგენა</p>
                    <button className="btnFor__personContainerReturn"><PersonIcon className="personClass__nameReturn" /> სახელით</button>
                    <button className="btnforRecover__emailContentReturn"><EmailIcon className="emailIcon__forReturn" /> ელექტრონული ფოსტით</button>
                </div>
                <div className="content__inputs">
                    
                </div>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;