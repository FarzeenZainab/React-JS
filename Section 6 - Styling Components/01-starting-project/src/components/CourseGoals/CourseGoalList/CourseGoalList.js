import React from "react";
import styles from "./CourseGoalList.module.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

export default function CourseGoalList({ items, onDeleteItem }) {
  const onDeleteHandler = (itemId) => {
    // find item
    const deleteItem = items.find((item) => {
      return item.id === itemId;
    });
    // filter list to remove the item
    const newList = items.filter((item) => {
      return item.id !== deleteItem.id;
    });
    // render new list
    onDeleteItem(newList);
  };

  const renderList = items.map((goal) => {
    return (
      <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteHandler}>
        {goal.text}
      </CourseGoalItem>
    );
  });

  return <ul className={`${styles.goal_list}`}>{items.length > 0 ? renderList : "No goals set, maybe add one?"}</ul>;
}
