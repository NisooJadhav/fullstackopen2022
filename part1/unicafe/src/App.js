import React, { useState } from "react";
import "./index.css";

const Button = (props) => {
  return (
    <>
      <button onClick={() => props.set(props.value + 1)}>{props.text}</button>
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <>
      <Button text={props.text} set={props.set} value={props.value} />
    </>
  );
};

const Statistics = (props) => {
  let good = props.good;
  let neutral = props.neutral;
  let bad = props.bad;

  let setGood = props.setGood;
  let setNeutral = props.setNeutral;
  let setBad = props.setBad;

  let total = good + neutral + bad;
  let average = (total / 3).toFixed(2);
  let positive = (good / 2).toFixed(2);

  return (
    <>
      <StatisticLine text="good :)" set={setGood} value={good} />
      <StatisticLine text="neutral :|" set={setNeutral} value={neutral} />
      <StatisticLine text="bad :(" set={setBad} value={bad} />
      <hr />
      {total > 0 ? (
        <>
          <center>
            <h3>stats</h3>
            <table border="1">
              <tr>
                <td>good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>total</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>average</td>
                <td>{average}</td>
              </tr>
              <tr>
                <td>positive</td>
                <td>{positive}%</td>
              </tr>
            </table>
          </center>
        </>
      ) : (
        <h3>no feedback given</h3>
      )}
    </>
  );
};

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div className="App">
        <h2>how would you rate our cafe?</h2>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
        />
      </div>
    </>
  );
}
