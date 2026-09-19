import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    n: '01',
    title: 'Website Development',
    desc: 'High-performance websites built around your brand, users and business goals.',
  },
  {
    n: '02',
    title: 'Software Development',
    desc: 'Scalable digital systems that turn ideas and workflows into reliable software.',
  },
  {
    n: '03',
    title: 'UI/UX Design',
    desc: 'Clear, engaging interfaces designed to make products easier to understand and use.',
  },
  {
    n: '04',
    title: 'Mobile App Development',
    desc: 'Modern mobile experiences designed for real users and real business outcomes.',
  },
  {
    n: '05',
    title: 'Digital Marketing',
    desc: 'Creative and performance-focused marketing that helps brands reach the right audience.',
  },
  {
    n: '06',
    title: 'Automation & AI Content Creation',
    desc: 'Smart workflows that reduce repetitive work and AI-powered visuals and videos created for campaigns, products and social media.',
  },
  {
    n: '07',
    title: 'Graphic Designing',
    desc: 'Creative visuals designed to make your brand stand out and connect with your audience.',
  },
  {
    n: '08',
    title: 'Business Intelligence',
    desc: 'Dashboards and data experiences that turn information into better decisions.',
  },
];


/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    n: '01',
    title: 'Undr Ctrl',
    type: 'Cafe',
    cls: 'project-one',
    image: '/projects/undr-ctrl.png',
    link: 'https://undrctrlburgers.in/',
  },
  {
    n: '02',
    title: 'Anvith Dazzle',
    type: 'Jewellery Shop',
    cls: 'project-two',
    image: '/projects/anvith-dazzle.png',
    link: 'https://anvithdazzle.in/',
  },

  {
    n: "03",
    title: "VBuild Ventures",
    type: "Construction Company Website",
    cls: "project-three",
    image: "/projects/vbuild-ventures.png",
    link: "https://vbuildventures.com/",
  },
  {
    n: "04",
    title: "aganazhigai",
    type: "Book Store ",
    cls: "project-four",
    image: "/projects/aganazhigai.png",
    link: "https://www.aganazhigai.com/",
  },

  
];


/* =========================================================
   ICONS
========================================================= */

function Arrow() {
  return <span className="arrow">↗</span>;
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.7"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
    >
      <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.57h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.35h-3.55v-5.63c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.73H9.2V9Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
      <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.5.9 1.3 1.6 2.2 2.1.2.1.4.1.5-.1l.7-.8c.1-.2.4-.2.6-.1l1.7.8c.2.1.3.3.2.6-.2.8-.7 1.4-1.4 1.6-.7.2-1.5-.1-2.3-.4-1.4-.6-2.7-1.6-3.6-2.8-.7-.9-1.4-2.1-1.5-3.1-.1-.5.1-1 .2-1.3Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
    >
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.21.65-.46v-1.62c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.08-1.4-1.08-1.4-.88-.6.07-.59.07-.59.98.07 1.5 1 1.5 1 .87 1.5 2.27 1.07 2.82.82.09-.63.34-1.07.62-1.32-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.89.98-2.56.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.61.98A9.1 9.1 0 0 1 12 7.2c.8 0 1.61.11 2.37.32 1.81-1.24 2.61-.98 2.61-.98.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.65-2.23 4.46-4.35 4.7.35.3.66.88.66 1.78v2.64c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}


/* =========================================================
   SOCIAL LINKS
========================================================= */

function SocialLinks({ dark = false }) {
  return (
    <div className={`social-icons ${dark ? 'social-icons-dark' : ''}`}>

      <a
        href="https://www.instagram.com/webdro26/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social-icon"
      >
        <InstagramIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/webdro/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="social-icon"
      >
        <LinkedInIcon />
      </a>

      <a
        href="https://wa.me/918883091192"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="social-icon"
      >
        <WhatsAppIcon />
      </a>

      <a
        href="https://github.com/Webdro26"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="social-icon"
      >
        <GithubIcon />
      </a>

    </div>
  );
}


/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticButton({ children, className = '', href = '#' }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 15,
  });

  const handleMove = (e) => {

    if (window.innerWidth <= 800) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;

    x.set(mx * 0.18);
    y.set(my * 0.18);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.a>
  );
}


/* =========================================================
   INTERACTIVE CARD
========================================================= */

function InteractiveCard({ children, className = '' }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  const handleMove = (e) => {

    if (window.innerWidth <= 800) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX =
      e.clientX - rect.left - rect.width / 2;

    const mouseY =
      e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   NAVBAR
========================================================= */

function Nav() {

  const [open, setOpen] = useState(false);

  const links = [
    ['Services', '#services'],
    ['Work', '#work'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="nav-wrap">

      <nav className="nav">

        <a href="/" className="brand">

          <img
            src="/logo/webdro-logo.png"
            alt="Webdro logo"
            className="brand-logo"
          />

          <span className="brand-name">
            webdro
          </span>

        </a>


        <div className="nav-links">

          {links.map(([x, h]) => (

            <a
              key={x}
              href={h}
            >
              {x}
            </a>

          ))}

        </div>


        <MagneticButton
          className="nav-cta"
          href="#contact"
        >
          Start a project <Arrow />
        </MagneticButton>


        <button
          className={`menu ${open ? 'menu-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>

      </nav>


      <AnimatePresence>

        {open && (

          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
          >

            {links.map(([x, h], i) => (

              <motion.a
                key={x}
                href={h}
                onClick={() => setOpen(false)}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.05,
                }}
              >
                {x}
              </motion.a>

            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Start a project <Arrow />
            </a>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}


/* =========================================================
   HERO
========================================================= */

function Hero() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  const handleMouseMove = (e) => {

    if (window.innerWidth <= 800) return;

    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  return (

    <section
      id="top"
      className="hero section-pad interactive-hero"
      onMouseMove={handleMouseMove}
    >

      <motion.div
        className="hero-grid"
        animate={{
          backgroundPosition: [
            '0px 0px',
            '80px 80px',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />


      <motion.div
        className="hero-mouse-glow"
        style={{
          x: glowX,
          y: glowY,
        }}
      />


      <motion.div
        className="eyebrow"
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
          duration: 0.7,
        }}
      >
        WEB DESIGN · DEVELOPMENT · DIGITAL GROWTH
      </motion.div>


      <motion.h1
        initial={{
          opacity: 0,
          y: 55,
          filter: 'blur(12px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        transition={{
          delay: 0.25,
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        We build digital
        <br />
        <em>experiences</em> that move.
      </motion.h1>


      <motion.div
        className="hero-bottom"
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.75,
          duration: 0.7,
        }}
      >

        <p>
          Webdro designs, develops and grows digital
          products for businesses ready to move forward.
        </p>


        <MagneticButton
          className="round-link hero-explore"
          href="#services"
        >
          Explore <Arrow />
        </MagneticButton>

      </motion.div>


      <div className="hero-orb orb-a"></div>
      <div className="hero-orb orb-b"></div>

    </section>
  );
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ s, i }) {

  return (
    <motion.a
      href="#contact"
      className="service-card compact-service-card"

      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },

        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay: i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}

      whileHover={{
        y: -8,
        scale: 1.015,
      }}

      whileTap={{
        scale: 0.98,
      }}
    >

      <div className="card-number">
        {s.n}
      </div>

      <div className="service-arrow">
        <Arrow />
      </div>

      <div className="service-main">

        <h3>
          {s.title}
        </h3>

        <p>
          {s.desc}
        </p>

      </div>

      <div className="service-line"></div>

    </motion.a>
  );
}

/* =========================================================
   SERVICES
========================================================= */

function Services() {

  return (
    <section
      id="services"
      className="section services section-pad"
    >

      <motion.div
        className="section-head"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <div>

          <span className="label">
            WHAT WE DO
          </span>

          <h2>
            Services built around
            <br />
            <em>your next move.</em>
          </h2>

        </div>

        <p>
          From the first idea to the final launch,
          we combine design, development, marketing
          and AI to build useful digital experiences.
        </p>

      </motion.div>

      <motion.div
        className="services-grid compact-services-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >

        {services.map((s, i) => (
          <ServiceCard
            key={s.n}
            s={s}
            i={i}
          />
        ))}

      </motion.div>

    </section>
  );
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ p }) {

  return (

    <motion.a
      href={p.link || '#contact'}
      target={p.link ? '_blank' : undefined}
      rel={p.link ? 'noopener noreferrer' : undefined}
      className={`project compact-project ${p.cls}`}

      initial={{
        opacity: 0,
        y: 80,
        scale: 0.96,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      viewport={{
        once: true,
        amount: 0.12,
      }}

      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >

      <InteractiveCard className="project-card-inner">

        <div className="project-visual">

          <motion.img
            src={p.image}
            alt={`${p.title} website`}
            className="project-image"

            whileHover={{
              scale: 1.045,
            }}

            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          />


          <motion.span
            className="project-view"
            initial={{
              opacity: 0,
              y: -10,
            }}
            whileHover={{
              opacity: 1,
              y: 0,
            }}
          >
            View Project ↗
          </motion.span>

        </div>


        <div className="project-meta">

          <span>
            {p.n}
          </span>

          <div>

            <h3>
              {p.title}
            </h3>

            <p>
              {p.type}
            </p>

          </div>

          <motion.div
            whileHover={{
              x: 5,
              y: -5,
            }}
          >
            <Arrow />
          </motion.div>

        </div>

      </InteractiveCard>

    </motion.a>
  );
}


/* =========================================================
   WORK
========================================================= */
function Work() {

  return (
    <section
      id="work"
      className="section section-pad work"
    >

      <motion.div
        className="section-head"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >

        <div>

          <span className="label">
            SELECTED WORK
          </span>

          <h2>
            Work that makes
            <br />
            <em>an impression.</em>
          </h2>

        </div>

        <p>
          A selection of digital experiences
          designed and developed by Webdro.
        </p>

      </motion.div>


      <div className="work-grid compact-work-grid">

        {projects.map((p, i) => (

          <motion.a
            href={p.link || "#contact"}
            target={p.link ? "_blank" : undefined}
            rel={
              p.link
                ? "noopener noreferrer"
                : undefined
            }

            className={`project compact-project ${p.cls}`}
            key={p.n}

            initial={{
              opacity: 0,
              y: 80,
              scale: 0.94,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            whileHover={{
              y: -10,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.9,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="project-visual"
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <motion.img
                src={p.image}
                alt={`${p.title} website`}
                className="project-image"

                whileHover={{
                  scale: 1.045,
                }}

                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <span className="project-view">
                View Project ↗
              </span>

            </motion.div>


            <div className="project-meta">

              <span>
                {p.n}
              </span>

              <div>

                <h3>
                  {p.title}
                </h3>

                <p>
                  {p.type}
                </p>

              </div>

              <Arrow />

            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}


/* =========================================================
   ABOUT
========================================================= */

function About() {

  return (

    <section
      id="about"
      className="section-pad about"
    >

      <motion.span
        className="label"
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
        }}
        transition={{
          duration: 0.7,
        }}
      >
        ABOUT WEBDRO
      </motion.span>


      <motion.div
        className="about-layout"

        initial={{
          opacity: 0,
          y: 70,
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
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <h2>
          Young team.
          <br />
          <em>
            Big digital th<span className="about-i">i</span>nking.
          </em>
        </h2>


        <div>

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

        </div>

      </motion.div>

    </section>
  );
}


/* =========================================================
   CONTACT
========================================================= */

function Contact() {

  return (

    <section
      id="contact"
      className="contact section-pad"
    >

      <motion.div
        className="contact-inner"

        initial={{
          opacity: 0,
          y: 70,
          scale: 0.97,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        viewport={{
          once: true,
          amount: 0.2,
        }}

        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <span className="label">
          START A PROJECT
        </span>


        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          Have an idea?
          <br />
          <em>Let's build it.</em>
        </motion.h2>


        <p>
          Tell us what you're working on.
          We'll figure out the right digital
          direction together.
        </p>


        <MagneticButton
          href="https://wa.me/918883091192"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          CONTACT US
          <span className="arrow">↗</span>
        </MagneticButton>


        <div className="contact-socials">

          <span>
            Connect with Webdro
          </span>

          <SocialLinks dark />

        </div>

      </motion.div>

    </section>
  );
}


/* =========================================================
   FOOTER
========================================================= */

function Footer() {

  return (

    <footer>

      <motion.div
        className="footer-top"

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
        }}

        transition={{
          duration: 0.7,
        }}
      >

        <div>

          <a
            href="/"
            className="footer-brand"
          >

            <img
              src="/logo/webdro-logo.png"
              alt="Webdro logo"
              className="footer-brand-logo"
            />

            <span className="footer-brand-name">
              webdro
            </span>

          </a>


          <p className="footer-description">
            Webdro designs and develops digital
            experiences that help businesses move forward.
          </p>

        </div>


        <div>

          <strong className="footer-heading">
            QUICK LINKS
          </strong>

          <div className="footer-links">

            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

          </div>

        </div>


        <div>

          <strong className="footer-heading">
            QUICK CONTACT
          </strong>

          <div className="footer-contact">

            <a href="mailto:webdro26@gmail.com">
              <span className="contact-small-icon">✉</span>
              webdro26@gmail.com
            </a>

            <a href="tel:+918883091192">
              <span className="contact-small-icon">☎</span>
              +91 88830 91192
            </a>

          </div>


          <SocialLinks dark />

        </div>

      </motion.div>


      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Webdro.
          All rights reserved.
        </span>

        <span>
          Designed & developed by Webdro.
        </span>

      </div>

    </footer>
  );
}


/* =========================================================
   APP
========================================================= */

export default function App() {

  return (
    <>
      <Nav />

      <main>

        <Hero />

        <Services />

        <Work />

        <About />

        <Contact />

      </main>

      <Footer />

    </>
  );
}
/* =========================================================
   PREMIUM MOTION SETTINGS
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};