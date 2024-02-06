import styles from "../Content/Content.module.css";

const Content = () => {
    return (
        <section className={styles["content"]}>

            <h1 className={styles["hero-text"]}>Let’s talk!</h1>
            <p>
                Have a challenge? Want to develop a new source for products or services?
                Or simply want a new perspective from an experienced veteran? Drop us a
                line or give us a call. Put our superior customer service and speedy
                response time to the test. We’re ready to help.
            </p>

            <button className={styles["hero-button"]}>CALL US NOW</button>

        </section>
    );
}

export default Content;