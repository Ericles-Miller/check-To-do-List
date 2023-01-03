import styles from './checkList.module.css';
import trash from '../img/trash.svg'

interface ITask { //mudar o nome da interface
  taskValue: object[];
  //idValue: number;
}

export function CheckList({ taskValue }: ITask) {
  console.log(taskValue)
  return (
    <div className={styles.UnionAttributesTask}>
      <section>
        <input type="checkbox"  id='checkbox' className={styles.checkboxA} />
        <label htmlFor='checkbox'  className={styles.checkboxLabel}>
          
        </label>
        <img src={trash} alt="" />
      </section>
    </div>
  );
}