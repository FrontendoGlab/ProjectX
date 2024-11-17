import React from "react";

//styles
import style from "./loginPage.module.scss";
import LoginForm from "components/loginForm/LoginForm";

const LoginPage: React.FC = () => {
    return (
        <div className={`${style.wrapper}`}>
            <LoginForm styleClass={style.form}/>
        </div>
    )
}

export default LoginPage 