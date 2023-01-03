import styles from './createContent.module.css';
import plus from '../img/Layer 1.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Tasks } from './Tasks';

export function CreateContent() {

  const [task, setTask] = useState<string[]>([]);
  const [countTask, setCountTask] = useState(0);
  const [newTaskText, setNewTaskText] = useState('');


  function handleCreateNewTask(event: FormEvent) { // recebo o evento de form 
    event.preventDefault(); // not reload page
    setTask([...task, newTaskText]);
    setNewTaskText('');
    setCountTask(countTask+1);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }
  console.log(task);
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