import BackgroundWords from "../components/BackgroundWords";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <section>
        <article>
          <BackgroundWords vhMobile="60vh" vhDesktop="80vh">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Trabajemos juntos.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <a
                href="mailto:luisadriannu13@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Ponerse en contacto.
              </a>
            </motion.div>
          </BackgroundWords>
        </article>
      </section>
    </>
  );
}
