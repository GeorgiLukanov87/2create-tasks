import styles from "../Header/Header.module.css";

const Header = () => {
    return (
        <header>
            <nav className={styles["nav"]}>
                <section className={styles["nav-logo"]}>
                    <img src="/images/logo.png" alt="logo" />
                </section>
                <section className={styles["nav-links"]}>
                    <ul className={styles["nav-ul"]}>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">LINK 1</a>
                        </li>
                        <li>
                            <a href="#">LINK 2</a>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}

export default Header;