import styles from './task.module.css';
import clipBoard from '../img/Clipboard.svg';
import { CheckList } from './CheckList';
import { useState } from 'react';
import ITaskProps from '../interfaces/ITaskProps';

interface IContentTask {
  countTask: number;
  task: ITaskProps[];
}

export function Tasks({  countTask, task }: IContentTask) {
  const [countCompletedTask, setCountCompletedTask] = useState(0);


  return (
    <div className={styles.allContentTasks}>
      <div className={styles.headerTask}>
        <div className={styles.stylesTask}>

          <p className={styles.newTask}>Tarefas Criadas</p>
          <span className={styles.number}>{countTask}</span>

        </div>
        <div className={styles.stylesTask}>

          <p className={styles.makeTask}>Concluidas</p>
          <span className={styles.number}>0</span>

        </div>
      </div>
      <div className={styles.showTasks}>
        {countTask === 0 ?
          <div className={styles.notTasks}>
            <img src={clipBoard} alt="" />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          task.map((item:any)=> {
            return <CheckList key={item} taskValue={item} />
          })
        }
      </div>
    </div>
  );
}