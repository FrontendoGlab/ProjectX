import React from "react";

//styles
import style from "./registerPage.module.scss";
import RegisterForm from "components/registerForm/RegisterForm"

const RegisterPage: React.FC = () => {
    return (
        <div className={`${style.wrapper}`}>
            <RegisterForm styleClass={style.form}/>
        </div>
    )
}

export default RegisterPage 