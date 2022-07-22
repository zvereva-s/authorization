import { Link } from "react-router-dom";

import styles from './logo.module.css';

function Logo() {
    return (
        <Link className={styles.logo} to='/products'>Logo</Link>
    )
 };
export default Logo;