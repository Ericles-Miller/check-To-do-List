import styles from './checkList.module.css';
import trash from '../img/trash.svg'
export function CheckList() { 
    return (
        <div className={styles.UnionAttributesTask}>
           <input type="checkbox" />
           <label >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
           <img src={trash} alt="" />
        </div>
    );
}