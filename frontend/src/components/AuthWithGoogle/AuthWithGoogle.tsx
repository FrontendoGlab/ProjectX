import React from "react";

// assets
import loginWighGoogleSvg from "../../assets/images/login_with_google.svg"

//styles
import style from "./AuthWithGoogle.module.scss";
import { LoginWithGoogleType } from "./type";


const LoginWithGoogle: React.FC<LoginWithGoogleType> = ({styleClass, innerText}) => {
    return (
        <div className={`${style.wrapper} ${styleClass}`}>

            <button type="button" className={style.button}> {innerText}</button>
            <span className={style.text}>{innerText}</span>
            <div className={style.picture}>
                <img src={loginWighGoogleSvg} alt="" />
            </div>

        </div>
    )
}

export default LoginWithGoogle 