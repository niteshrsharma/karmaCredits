import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>

      {/* HEADER */}
      <section className={styles.header}>
        <h1>About Karma Credits</h1>
        <p>
          An initiative dedicated to fostering positive behaviour and
          building strong school communities
        </p>
      </section>

      {/* VISION */}
      <section className={styles.vision}>
        <h2>Our Vision</h2>
        <p>
          Empower young citizens to create better individuals and better
          societies. Our vision is to nurture these qualities early through
          Karma (action), so young people grow up seeing kindness as
          strength and responsibility as value.
        </p>
        <p>
          By building Karma Credits, their social credit through everyday
          acts of empathy, students develop strong moral character,
          strengthen relationships, and contribute to a more connected and
          compassionate society.
        </p>
      </section>

      {/* WHY */}
      <section className={styles.why}>
        <h2>Why we created this</h2>
        <p>
          Karma Credit is built on a simple idea — empathic, kind action
          matters. By recognising and rewarding helpful actions, we
          encourage students to turn kindness, responsibility, and
          collaboration into everyday habits.
        </p>
        <p>
          When young people feel seen for doing good, they are more likely
          to support others and grow into compassionate, responsible
          individuals who strengthen their communities.
        </p>
      </section>

      {/* OBJECTIVES */}
      <section className={styles.objectives}>
        <h2>Our Objectives</h2>

        <div className={styles.objectiveGrid}>
          <div className={styles.objectiveItem}>
            <span />
            <p>Help in creating more empathetic, proactive citizens.</p>
          </div>

          <div className={styles.objectiveItem}>
            <span />
            <p>
              Motivate positive social behaviour through recognition and
              reinforcement.
            </p>
          </div>

          <div className={styles.objectiveItem}>
            <span />
            <p>Build social credit through empathy-driven experiences.</p>
          </div>

          <div className={styles.objectiveItem}>
            <span />
            <p>Increase inclusiveness and social awareness.</p>
          </div>

          <div className={styles.objectiveItem}>
            <span />
            <p>Build a network of socially responsible student communities.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
