import styles from "./Home.module.css";
import { motion } from "framer-motion";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

const flowVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

export default function Home() {
  return (
    <div className={styles.home}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Karma Credit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Recognizing empathic actions by students
          </motion.p>

          {/* FLOW */}
          <div className={styles.flow}>
            {[
              { icon: <SchoolOutlinedIcon />, label: "Student" },
              { icon: <FavoriteBorderOutlinedIcon />, label: "Empathic Action" },
              { icon: <AutoAwesomeOutlinedIcon />, label: "Credits" },
              { icon: <EmojiEventsOutlinedIcon />, label: "Recognition" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.flowItem}
                variants={flowVariant}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ scale: 1.08 }}
              >
                <div className={styles.iconCircle}>{item.icon}</div>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with us
          </motion.button>
        </div>
      </section>

      {/* WHAT IS KARMA CREDIT */}
      <section className={styles.section}>
        <h2>What is Karma Credit?</h2>
        <p className={styles.text}>
          Karma Credit celebrates students who demonstrate empathy,
          kindness, and responsibility.
        </p>
        <p className={styles.text}>
          By recognizing positive actions, we inspire young minds
          to create meaningful impact.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.sectionAlt}>
        <h2>How it Works?</h2>

        <div className={styles.cards}>
          {["Do a Karma", "Submit on App", "Earn Credits", "Redeem Rewards"].map(
            (title, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.iconCircle}>
                  <h3>{i + 1}</h3>
                </div>
                <h4>{title}</h4>
                <p>Simple, meaningful actions that build positive habits.</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className={styles.whoForSection}>
        <h2>Who it's For?</h2>
        <p className={styles.subText}>
          Karma Credits is for young people and those who guide them.
        </p>

        <div className={styles.whoGrid}>
          {[
            { icon: <SchoolOutlinedIcon />, title: "Students" },
            { icon: <GroupsOutlinedIcon />, title: "Parents" },
            { icon: <AccountBalanceOutlinedIcon />, title: "Schools" },
            { icon: <Diversity3OutlinedIcon />, title: "Community Partners" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.whoCard}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconCircle}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>Supporting empathy and positive growth.</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
