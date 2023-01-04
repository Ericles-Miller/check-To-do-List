import styles from './task.module.css';
import clipBoard from '../img/Clipboard.svg';
import { CheckList } from './CheckList';
import ITaskProps from './CreateContent';
import { useState } from 'react';
import { string } from 'prop-types';

interface IContentTask {
  countTask: number;
  task: ITaskProps[];
  listDeleteTask: (tasksWithoutDeletedOne:ITaskProps[]) => void;
}

export function Tasks({ countTask, task, listDeleteTask }: IContentTask) {
  const [completedTask, setCompletedTask] = useState(0);

  function handleCompletedTasks(id:string) {
    task.map(item =>{
      if(item.id === id) {
        if(item.isCompleted === true){
          setCompletedTask(completedTask +1)
        }
        else {
          setCompletedTask(completedTask -1);
        }
      }
    })
  }

  function changeIsComplete(id: string) {
    task.map(item => {
      if (item.id === id) {
        console.log(item.isCompleted);
        item.isCompleted = !item.isCompleted // recebe o valor inverso
      }
    })
    handleCompletedTasks(id)
  };

  function handleDeleteTask(id:string): void {
    const tasksWithoutDeletedOne = task.filter(item => {
      return item.id !== id;
    })
    listDeleteTask(tasksWithoutDeletedOne)
  }

  return (
    <div className={styles.allContentTasks}>
      <div className={styles.headerTask}>
        <div className={styles.stylesTask}>

          <p className={styles.newTask}>Tarefas Criadas</p>
          <span className={styles.number}>{countTask}</span>

        </div>
        <div className={styles.stylesTask}>

          <p className={styles.makeTask}>Concluidas</p>
          <span className={styles.number}>{completedTask}</span>

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
            return <CheckList 
              key={item.id}
              id={item.id}
              taskValue={item.content}
              isCompleted={item.isCompleted}
              onChangeIsComplete={changeIsComplete}
              onDeleteTask={handleDeleteTask}             
            />
          })
        }
      </div>
    </div>
  );
}