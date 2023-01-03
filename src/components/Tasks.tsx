import styles from './task.module.css';
import clipBoard from '../img/Clipboard.svg';


export function Tasks() {
	return (
		<div className={styles.allContentTasks}>
			<div className={styles.headerTask}>
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
				<img src={clipBoard} alt="" />
				<p><strong>Você ainda não tem tarefas cadastradas</strong></p>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</div>
	)
}