import React from "react";
import styles from "./header.module.css";

const Header = ({ habits }) => {
  const getTotalCount = () => {
    const length = habits.filter((habit) => habit.count > 0).length;
    return length;
  };

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Habit Tracker</h1>
      <span className={styles.count}>{getTotalCount()}</span>
    </header>
  );
};

export default Header;
