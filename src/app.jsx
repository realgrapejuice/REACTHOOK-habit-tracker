import styles from "./app.module.css";
import Habits from "./components/habits/habits";
import Header from "./components/header/header";
import Reset from "./components/reset/reset";
import React, { useState } from "react";

function App() {
  const [userHabits, setUserHabits] = useState([]);

  const handleIncrement = (habit) => {
    const habits = userHabits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setUserHabits(habits);
  };

  const handleDecrement = (habit) => {
    const habits = userHabits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count <= 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
    setUserHabits(habits);
  };

  const handleDelete = (habit) => {
    const habits = [...userHabits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    setUserHabits(habits);
  };

  const handleSubmit = (habit) => {
    const habits = [...userHabits];
    habits.push(habit);
    setUserHabits(habits);
  };

  const reset = () => {
    const habits = [...userHabits];
    habits.map((habit) => (habit.count = 0));
    setUserHabits(habits);
  };

  return (
    <section className={styles.container}>
      <Header habits={userHabits} />
      <Habits
        habits={userHabits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
      />
      <Reset onReset={reset} />
    </section>
  );
}

export default App;
