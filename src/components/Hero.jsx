import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="top" className="hero section-pad">

      <div className="hero-grid"></div>

      <div className="hero-orb orb-a"></div>
      <div className="hero-orb orb-b"></div>

      <div>
        <span className="eyebrow">
          DIGITAL STUDIO · WEBDRO
        </span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          We build
          <br />
          <em>digital</em>
          <br />
          experiences.
        </motion.h1>
      </div>


      <div className="hero-bottom">

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        >
          Webdro is a digital studio building websites,
          software, brands and digital experiences that
          move businesses forward.
        </motion.p>


        <motion.a
          href="#services"
          className="round-link hero-explore"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
        >
          Explore
          <span className="arrow">↘</span>
        </motion.a>

      </div>

    </section>
  );
}

export default Hero;