import Habit from "../habit/habit";
import HabitForm from "../habitform/habitform";
import styles from "./habits.module.css";
import React from "react";

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onSubmit }) => {
  const handleIncrement = (habit) => {
    onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    onDecrement(habit);
  };

  const handleDelete = (habit) => {
    onDelete(habit);
  };

  const handleSubmit = (habit) => {
    onSubmit(habit);
  };

  return (
    <section className={styles.container}>
      <HabitForm onSubmit={handleSubmit} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            id={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
};

export default Habits;
