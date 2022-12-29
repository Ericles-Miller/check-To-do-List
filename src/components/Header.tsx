import toDoListLogo from '../img/Logo.svg';
import styles from './header.module.css';

export function Header() {

  return (
      <header className={styles.header}>
        <img
          className={styles.imgLogo}
          src={toDoListLogo}
          alt="logo ToDoList" />
      </header>
  );
}