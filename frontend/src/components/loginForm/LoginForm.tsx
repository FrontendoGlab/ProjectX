import React from "react";
import { Link } from "react-router-dom";

// assets
import logo from "../../assets/images/Geekbrains_logo.svg";

// styles
import style from "./loginForm.module.scss";
import blockStyles from "../../styles/blocks.module.scss";
import { LoginFormProps } from "./type";
import AuthWithGoogle from "components/AuthWithGoogle/AuthWithGoogle";

// types

const LoginForm: React.FC<LoginFormProps> = ({ styleClass }) => {
  return (
    <div className={styleClass}>
      <form className={style.form}>
        <header className={style.header}>
          <img
            src={logo}
            alt=""
            className={`${style.logo} ${blockStyles.logo}`}
          />
          <h1 className={blockStyles["form-title"]}>Чат Вадима</h1>
        </header>
        <AuthWithGoogle
          styleClass={style["login-with-google"]}
          innerText="Войти с гугл"
        />
        <div className={style.separator}>Или</div>
        <label
          className={`${blockStyles["form-label"]} ${style["label-email"]}`}
        >
          <span className={blockStyles["form-label__text"]}>Email</span>
          <div className={blockStyles["form-label__wrapper"]}>
            <input
              className={blockStyles["form-label__input"]}
              required
              name="email"
              type="email"
              placeholder="Электронная почта"
            />
            <div className={blockStyles["form-label__decor"]}></div>
          </div>
        </label>
        <label
          className={`${blockStyles["form-label"]} ${style["label-password"]}`}
        >
          <span className={blockStyles["form-label__text"]}>Пароль</span>
          <div className={blockStyles["form-label__wrapper"]}>
            <input
              className={blockStyles["form-label__input"]}
              required
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <div className={blockStyles["form-label__decor"]}></div>
          </div>
        </label>
        <label
          className={`${blockStyles["form-checkbox"]} ${style["label-checkbox"]}`}
        >
          <div className={blockStyles["form-checkbox__input-wrapper"]}>
            <input
              className={blockStyles["form-checkbox__input"]}
              type="checkbox"
            />
            <div className={blockStyles["form-checkbox__decor"]}></div>
          </div>
          <span className={blockStyles["form-checkbox__text"]}>
            Запомнить меня
          </span>
        </label>
        <button
          className={`${blockStyles["form-button"]} ${style.button}`}
          type="submit"
        >
          Войти
        </button>
        <div className={style.links}>
          <a className={style.link} href="#">
            Забыли пароль?
          </a>
          <Link to="/Register" className={style.link}>
            У меня нету аккаунта
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
