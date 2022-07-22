import { NavLink } from 'react-router-dom';
import { items } from './items';

import styles from './headerMenu.module.css';

function getClassName({isActive}) {
    const className = isActive ? styles.isActive : styles.link;
    return className;
}

function HeaderMenu() { 

    const elements = items.map(item => <li key={item.id} className={styles.item}><NavLink className={getClassName} to={item.link}>{item.name}</NavLink></li>)
    
    return (
        <nav className={styles.wrapper}>
            <ul className={styles.list}>
                {elements}
            </ul>
        </nav>
    )
};
export default HeaderMenu;