import styles from './checkList.module.css';
import trash from '../img/trash.svg'

interface ITask { //mudar o nome da interface
  taskValue: string;
  id: string;
  isCompleted:boolean;
  onChangeIsComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function CheckList({isCompleted,id,taskValue,onChangeIsComplete,onDeleteTask }: ITask) {

  function handleChangeIsComplete() {
    onChangeIsComplete(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }
  
  return (
    <div className={styles.UnionAttributesTask}>
      <section key={id}>
        <input 
          type="checkbox"
          id={id}
          className={styles.checkboxA}
          onClick={handleChangeIsComplete}
        />
        <label htmlFor={id}  className={styles.checkboxLabel}>
          {taskValue}
        </label>
        <button style={{background:'transparent', border:'none'}}
          type='button'
          title='delete'
          onClick={handleDeleteTask}>
          <img src={trash} alt="" />
        </button>
      </section>
    </div>
  );
}