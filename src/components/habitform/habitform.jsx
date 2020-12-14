import React, { useRef } from "react";
import styles from "./habitform.module.css";

const HabitForm = ({ onSubmit }) => {
  const inputRef = useRef();

  const submitEventHandler = (event) => {
    event.preventDefault();
    const habit = {
      id: Date.now(),
      name: inputRef.current.value,
      count: 0,
    };
    onSubmit(habit);
    inputRef.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitEventHandler}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Add Habit"
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default HabitForm;
