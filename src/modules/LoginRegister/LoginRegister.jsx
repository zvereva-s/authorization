import { NavLink } from "react-router-dom";
import styles from './loginRegister.module.css';

function getClassName({ isActive }) {
    const clasname = isActive ? styles.isActive : styles.link;
    return clasname;
}

function LoginRegister() { 

    return (
        <div className={styles.wrapper}>
            <p><NavLink className={getClassName} to='/login'>Login</NavLink></p>
            <p><NavLink className={getClassName} to='/register'>Register</NavLink></p>
        </div>
    )

};
export default LoginRegister;