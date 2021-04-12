import styles from "./index.module.scss";

export default function AboutUs() {
  return (
    <section className={`flex padded ${styles["about-us"]}`}>
      <section className={`flex flex-col w-1/2 ${styles.information}`}>
        <div className={`text-blue ${styles.title}`}>
          Aktas Properties Information
        </div>
        <div className={styles.address}>1234 Hacker St, San Francisco</div>
        <div className={styles.phone}>(123) 456-7890</div>
        <div className={styles.shifts}>Mon — Sun: 8:00am - 6:00pm</div>
      </section>
      <section className={`flex flex-col bg-blue w-1/2 ${styles.ads}`}>
        <div className={`text-white ${styles.title}`}>
          Want to Sell Property?
        </div>
        <div className={`text-white ${styles["ads-content"]}`}>
          Let us create a tailored strategic marketing plan and keep track of
          the selling process.
        </div>
        <button
          type="button"
          className={`text-white rounded-full bg-light-green ${styles["contact-us-btn"]}`}
        >
          Contact Us
        </button>
      </section>
    </section>
  );
}
