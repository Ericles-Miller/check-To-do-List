import styles from './checkList.module.css';
import trash from '../img/trash.svg'

interface ITask { //mudar o nome da interface
  task: string[]
}


export function CheckList({ task }: ITask) {
  return (
    <>
    {
      task != undefined && task.map((item:any) => (
          <div className={styles.UnionAttributesTask}>
          <section>
            <input type="checkbox" id='checkbox' className={styles.checkboxA} />
            <label htmlFor='checkbox' className={styles.checkboxLabel}>
              {item}
            </label>
            <img src={trash} alt="" />
          </section>
        
    </div>
    ))
  }
  </>
  );
}