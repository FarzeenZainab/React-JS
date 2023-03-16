import React from "react";
import styles from "./CourseGoalItem.module.css";

export default function CourseGoalItem({ children, id, onDelete }) {
  const deleteHandler = () => {
    const itemId = id;
    onDelete(itemId);
  };

  return (
    <li className={`${styles.goal_item}`} onClick={deleteHandler}>
      {children}
    </li>
  );
}
