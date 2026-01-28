import { useState } from "react";
import styles from "./Faq.module.css";

const faqData = [
  {
    q: "What are Karma Credit?",
    a: "Karma Credit are points that students earn for doing positive, helpful, and responsible actions in their surroundings. These credits recognise good behaviour and encourage students to contribute positively to society."
  },
  {
    q: "Who can participate?",
    a: "Students in the age group of 11 to 18 years can participate in the program."
  },
  {
    q: "What kind of actions are allowed?",
    a: "A list of empathic actions that show kindness, responsibility, social awareness, teamwork, honesty, and community support will be given in the Karma Credit mobile application. These may include helping peers, participating in school initiatives, volunteering, or showing respectful behaviour. Students can select the actions based on what they would like to do or what they need from their surroundings."
  },
  {
    q: "How are credits assigned?",
    a: "Credits are assigned after a student’s action is reviewed and verified by the Karma Credit program team, ensuring fairness and transparency."
  },
  {
    q: "What rewards can students redeem?",
    a: "Students can redeem Karma Credit for simple, meaningful rewards such as stationery items from a local Karma Credit partner store. Other options such as learning resources, course fee waivers or discounts, and future skill-building opportunities will be added in the future. Rewards focus on motivation and growth rather than material gain."
  },
  {
    q: "Is participation voluntary?",
    a: "Yes. Participation in the Karma Credit program is completely voluntary. Students are encouraged to join, but no one is forced to participate."
  },
  {
    q: "How is student data protected?",
    a: "Student data is collected only for program purposes and is stored securely. Personal information is not shared with third parties, and all data handling follows basic data protection and privacy guidelines."
  },
  {
    q: "What if a student does not have a personal smartphone?",
    a: "Students can still participate using shared devices at home or with the support of teachers. The program is designed to be inclusive and not dependent on owning a personal smartphone."
  },
  {
    q: "Is there any limit to how many Karma Credit I can earn?",
    a: "There is no fixed limit on earning Karma Credit. Students are encouraged to practice positive actions consistently, focusing on quality and sincerity rather than quantity."
  },
  {
    q: "Why should I participate in this program?",
    a: "Karma Credit helps you build empathy and a sense of responsibility towards family and community. It recognises your positive actions, strengthens your social skills, and supports your overall personal and academic growth."
  }
];


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>

      {/* HEADER */}
      <section className={styles.header}>
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about the<br />
          Karma Credits program
        </p>
      </section>

      {/* FAQ LIST */}
      <section className={styles.list}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(index)}
            >
              {item.q}
              <span className={openIndex === index ? styles.rotate : ""}>⌄</span>
            </button>

            {openIndex === index && (
              <div className={styles.answer}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </section>

    </div>
  );
}
