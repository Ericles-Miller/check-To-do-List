import styles from './task.module.css';

export function Tasks() {
	return (
		<div className={styles.allContentTask}>
			<div className={styles.stylesTask}>
				<p className={styles.newTask}>Tarefas Criadas</p>
				<p>0</p>
			</div>
			<div className={styles.stylesTask}>
				<p className={styles.makeTask}>Concluidas</p>
				<p>0</p>
			</div>
		</div>
	)
}