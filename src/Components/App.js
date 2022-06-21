import React from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

//css
import classes from "./App.module.css";

export default function App() {
  const [questions, setQuestions] = React.useState(data);
  return (
    <main>
      <div className={classes.container}>
        <h3 className={classes.head}>Frequently Asked Questions About Login</h3>
        <section className={classes.info}>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
