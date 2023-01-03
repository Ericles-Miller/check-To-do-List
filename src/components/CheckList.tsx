import styles from './checkList.module.css';
import trash from '../img/trash.svg'

interface ITask { //mudar o nome da interface
  taskValue: string;
  id: string;
  isCompleted:boolean;
}

export function CheckList({isCompleted,id,taskValue }: ITask) {

  
  return (
    <div className={styles.UnionAttributesTask}>
      <section key={id}>
        <input type="checkbox" id={id} className={styles.checkboxA} />
        <label htmlFor={id}  className={styles.checkboxLabel}>
          {taskValue}
        </label>
        <img src={trash} alt="" />
      </section>
    </div>
  );
}