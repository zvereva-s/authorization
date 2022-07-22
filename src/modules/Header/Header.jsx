// import { NavLink } from "react-router-dom";

import HeaderMenu from "./HeaderMenu";
import LoginRegister from "modules/LoginRegister";
import UserMenu from "modules/UserMenu";

import Logo from "shared/components/Logo";

import styles from './header.module.css';

function Header() {
    const isLogin = false;
    return (
        <header className={styles.wrapper}>
            <Logo />
            <HeaderMenu />
            {isLogin ? <UserMenu /> : <LoginRegister />}
        </header>
    )
 };

export default Header;