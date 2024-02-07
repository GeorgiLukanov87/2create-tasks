import styles from "../Footer/Footer.module.css";
let footerImgPath = "./images/footer-logo.png";

const Footer = () => {
    return (
        <footer>
            <section className={styles["footer-logo"]}>
                <img src={footerImgPath} alt="ftr-logo" />
                <ul className={styles["footer-ul"]}>
                    <li>
                        <a className={styles["footer-link"]} href="#">
                            Lorem Ipsum Link
                        </a>
                    </li>
                    <li>
                        <a className={styles["footer-link"]} href="#">
                            Lorem Ipsum Link 2
                        </a>
                    </li>
                    <li>
                        <a className={styles["footer-link"]} href="#">
                            Lorem Ipsum Link 3
                        </a>
                    </li>
                </ul>
                <div className={styles["footer-line"]} />
                <p className={styles["footer-brand"]}>
                    <span id={styles["copyright-span"]}>© </span>Brand name, 2022
                </p>
                <ul className={styles["footer-socials"]}>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-square-reddit" />
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;