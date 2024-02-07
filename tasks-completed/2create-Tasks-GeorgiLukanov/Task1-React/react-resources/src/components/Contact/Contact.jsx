import styles from "../Contact/Contact.module.css";

const Contact = () => {
    return (
        <section className={styles["contact"]}>
            
            <article className={styles["contact-article"]}>
                <h2>Contact</h2>
                <p className={styles["contact-p1"]}>
                    Tell us about your project and let’s create something together.
                </p>
                <p className={styles["contact-p2"]}>Email:</p>
                <p className={styles["contact-p3"]}>contact@business.com</p>
                <p className={styles["contact-p4"]}>Phone:</p>
                <p className={styles["contact-p5"]}>555-555-555</p>
                <p className={styles["contact-line"]} />
                <h3 className={styles["contact-working-hours"]}>Working Hours</h3>
                <p className={styles["contact-p6"]}>MON-FRI: 9:00 AM - 6:00 PM</p>
            </article>

            <article className={styles["contact-google-image"]}>
                <iframe></iframe>
            </article>


            {/* <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="679px" height=" 510px" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=varna&t=&z=11&ie=UTF8&iwloc=&output=embed" ></iframe>
                </div>
            </div> */}


        </section>
    );
};

export default Contact;