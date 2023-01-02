import styles from './checkList.module.css';
import trash from '../img/trash.svg'

export function CheckList() {
  return (
    <div className={styles.UnionAttributesTask}>
      <section>
        <input type="checkbox" id='checkbox' className={styles.checkboxA}/>
        <label htmlFor='checkbox' className={styles.checkboxLabel}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer sdfsdfsd sdfs ghfghf hegets fsddgsduhrt svdsf s .</label>
        <img src={trash} alt="" />
      </section>
    </div>
  );
}