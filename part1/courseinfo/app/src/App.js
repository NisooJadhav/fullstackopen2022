import "./style.css";

const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Content = (props) => {
  return props.parts.map((e) => {
    return (
      <li>
        {e.name}, {e.exercises}
      </li>
    );
  });
};

const Total = (props) => {
  let total = 0;
  props.parts.forEach((e) => {
    total += e.exercises;
  });
  return <li>Total Exercises: {total}</li>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
