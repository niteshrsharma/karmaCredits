import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>

      {/* HEADER */}
      <section className={styles.header}>
        <h1>Get in Touch</h1>
        <p>
          Interested in bringing Karma Credits to your school?<br />
          We'd love to hear from you!
        </p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* LEFT FORM */}
        <div className={styles.formSection}>
          <h2>Send Us A Message</h2>

          <form className={styles.form}>
            <label>
              Name
              <input type="text" placeholder="Your Name" />
            </label>

            <label>
              School / Organization
              <input type="text" placeholder="Your School / Organization" />
            </label>

            <label>
              Phone or Email
              <input type="text" placeholder="Best way to reach you" />
            </label>

            <label>
              Message
              <textarea placeholder="Tell us about your interest in reaching out to us" />
            </label>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className={styles.infoSection}>
          <h2>Why Reach Out?</h2>

          <p>
            We're here to support schools and organizations interested in
            implementing Karma Credits. Whether you have questions, need
            guidance, or want to explore partnerships — we're ready to help.
          </p>

          <div className={styles.points}>
            <div className={styles.point}>
              <span />
              <div>
                <strong>For Schools</strong>
                <p>Learn how to implement Karma Credits in your school community</p>
              </div>
            </div>

            <div className={styles.point}>
              <span />
              <div>
                <strong>For Partners</strong>
                <p>Explore collaboration opportunities with our NGO program</p>
              </div>
            </div>

            <div className={styles.point}>
              <span />
              <div>
                <strong>General Inquiries</strong>
                <p>Learn how Karma Credits can support your initiative</p>
              </div>
            </div>
          </div>

          <div className={styles.note}>
            <strong>Note:</strong> We typically respond within 1–2 business days.
            We look forward to connecting with you!
          </div>
        </div>

      </section>
    </div>
  );
}
