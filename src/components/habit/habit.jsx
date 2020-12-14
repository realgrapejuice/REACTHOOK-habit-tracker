import styles from "./habit.module.css";
import React from "react";

const Habit = ({ habit, onIncrement, onDecrement, onDelete }) => {
  const { name, count } = habit;

  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <li className={styles.habit}>
      <span className={styles.habitTitle}>{name}</span>
      <span className={styles.habitCount}>{count}</span>
      <button className={styles.plus} onClick={handleIncrement}>
        <i className="far fa-plus-square"></i>
      </button>
      <button className={styles.minus} onClick={handleDecrement}>
        <i className="far fa-minus-square"></i>
      </button>
      <button className={styles.erase} onClick={handleDelete}>
        <i className="far fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default Habit;
