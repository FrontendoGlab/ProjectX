import React from "react";
import { Link } from "react-router-dom";

//styles
import style from "./notFoundPage.module.scss";

const NotFoundPage: React.FC = () => {
    return (
        <>
            <h1>Извините pAge из нот фаунд</h1>
            <Link to="/">Вернутьсф домой</Link>
        </>
    )
}


export default NotFoundPage