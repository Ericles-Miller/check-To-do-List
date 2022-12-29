import styles from './createWork.module.css';

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
          </button>
        </form>
      </div>
    </div>
  )
}