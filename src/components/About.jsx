import { motion } from "framer-motion";

function Arrow() {
  return <span className="arrow">↗</span>;
}

function About() {
  return (
    <section
      id="about"
      className="section-pad about"
    >
      <span className="label">
        ABOUT WEBDRO
      </span>

      <div className="about-layout">

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          Small team.
          <br />

          <em>
            Big digital th<span className="about-i">i</span>nking.
          </em>
        </motion.h2>


        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >

          <p className="about-lead">
            Webdro is a digital design and development
            studio helping businesses turn ideas into
            websites, software, campaigns and intelligent
            experiences.
          </p>

          <p>
            We care about the details people notice —
            and the systems they don't. Every project
            is designed to look good, work well and
            have a reason to exist.
          </p>

          <a
            className="text-link"
            href="#contact"
          >
            Let's build something <Arrow />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default About;   