import React, { useState } from "react";
import "./index.css";

export default function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [maxVotes, setMostVotes] = useState(0);
  let a = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(a);

  let random_number = Math.floor(Math.random() * (anecdotes.length - 0) + 0);

  const nextAnecdote = () => {
    setSelected(random_number);
  };

  const incVote = () => {
    // console.log(...votes)
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);

    const max = copy.reduce((a, b) => {
      return Math.max(a, b);
    }, -0);
    setMostVotes(copy.indexOf(max));
    // console.log(maxVotes)
    // console.log(setMostVotes);
  };

  return (
    <>
      <div>
        <h2>anecdote of the day</h2>
        <h3> {anecdotes[selected]}</h3>
        <button onClick={incVote}>vote {votes[selected]}</button>
        <button
          onClick={() => {
            nextAnecdote();
          }}
        >
          next anecdote
        </button>
      </div>

      <center>
        <hr />
      </center>

      <h2>anecdote with most votes:</h2>
      <h3> {anecdotes[maxVotes]}</h3>
      <b>{votes[maxVotes]} votes</b>
    </>
  );
}
