import styles from './task.module.css';

export function Tasks() {
	return (
		<div>
			<div className={styles.allContentTask}>
				<div className={styles.stylesTask}>
					<p className={styles.newTask}>Tarefas Criadas</p>
					<span className={styles.number}>0</span>
				</div>
				<div className={styles.stylesTask}>
					<p className={styles.makeTask}>Concluidas</p>
					<span className={styles.number}>0</span>
				</div>
			</div>
			<div className={styles.showTasks}>

			</div>
		</div>
	)
}