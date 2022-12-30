import styles from './createWork.module.css';
import plus from '../img/Layer 1.svg';
export function CreateWork() {
  return (
    <div className={styles.globalDiv} >
      <div>
        <form className={styles.form}>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
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