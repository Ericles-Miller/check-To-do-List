import styles from './createWork.module.css';
import plus from '../img/Layer 1.svg';
export function CreateWork() {
  return (
    <div className={styles.globalDiv} >
      <div>
        <form className={styles.form}>
          <textarea
            name='comment'
            placeholder='Adicione uma nova tarefa'
          />
          <button type='submit'>
            Criar
            <img src={plus} alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}