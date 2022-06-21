import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

//css
import classes from "./SingleQuestion.module.css";

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={classes.articlesec}>
      <header className={classes.headsec}>
        <h4>{title}</h4>
        <button className={classes.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className={classes.answer}>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
