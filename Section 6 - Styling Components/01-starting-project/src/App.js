import "./App.css";
import Button from "./components/UI/Button/Button";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import { useState } from "react";

const App = () => {
  const [courseGoal, setCourseGoal] = useState([
    { id: "g1", text: "Do All Exercises!" },
    { id: "g2", text: "Finish the course!" },
  ]);

  const setGoal = (newGoal) => {
    setCourseGoal([newGoal, ...courseGoal]);
  };

  const updateGoal = (newList) => {
    setCourseGoal([...courseGoal]);
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onClickHandler={setGoal} />
      </section>
      <section id="goals">
        <CourseGoalList items={courseGoal} onDeleteItem={setCourseGoal} />
      </section>
    </div>
  );
};

export default App;
