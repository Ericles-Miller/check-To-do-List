import styles from './checkList.module.css';
import trash from '../img/trash.svg'

interface ITask { //mudar o nome da interface
  taskValue: string[]
}


export function CheckList({ taskValue }: ITask) {
  return (
    <div className={styles.UnionAttributesTask}>
      <section>
        <input type="checkbox" id='checkbox' className={styles.checkboxA} />
        <label htmlFor='checkbox' className={styles.checkboxLabel}>
          {taskValue}
        </label>
        <img src={trash} alt="" />
      </section>
    </div>
  );
}