import styles from './checkList.module.css';
import trash from '../img/trash.svg'

interface ITask { //mudar o nome da interface
  taskValue: string;
  id: string;
  isCompleted:boolean;
}

interface IFunctionTask{
  onChangeIsComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function CheckList({isCompleted,id,taskValue }: ITask, {onChangeIsComplete,onDeleteTask}:IFunctionTask) {

  




  console.log(id, taskValue)
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