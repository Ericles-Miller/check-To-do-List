import styles from './createContent.module.css';
import plus from '../img/Layer 1.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Tasks } from './Tasks';
import { v4 as uuid } from 'uuid';

export default interface ITaskProps{
  id: number;
  content: string;
  isCompleted:boolean;
}

export function CreateContent() {

  const [task, setTask] = useState<ITaskProps[]>([]);

  const [countTask, setCountTask] = useState(0);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) { // recebo o evento de form 
    event.preventDefault(); // not reload page
    
    const contentTask = {
      id: uuid(),
      content: newTaskText,
      isCompleted: false
    }


    setTask([...task, contentTask]);
    setNewTaskText('');
    setCountTask(countTask+1);
    
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  return (
    <div className={styles.showWorks}>
      <div className={styles.globalDiv} >
        <div>
          <form
            onSubmit={handleCreateNewTask}
            className={styles.form}>
            <input
              name='task'
              type='text'
              placeholder='Adicione uma nova tarefa'
              onChange={handleNewTaskChange}
              value={newTaskText}
              required
            />
            <button type='submit'>
              <div className={styles.buttonAndParagraph}>
                <p>Criar</p>
                <img src={plus} alt="" />
              </div>
            </button>
          </form>
        </div>
      </div>
      <Tasks 
        countTask ={countTask}
        task = {task}
      />
    </div>
  )
}