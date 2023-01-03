import styles from './createContent.module.css';
import plus from '../img/Layer 1.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

export function CreateContent() {

  const [task, setTask] = useState<string[]>([]);

  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event:FormEvent) { // recebo o evento de form 
    event.preventDefault(); // not reload page
    setTask([...task, newTaskText]);
    setNewTaskText('');
  }
  console.log(task);
  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    console.log(newTaskText)
    setNewTaskText(event.target.value);
  }


  return (
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
  )
}