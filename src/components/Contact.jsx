import { motion } from "framer-motion";

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
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

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
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.21.65-.46v-1.62c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.08-1.4-1.08-1.4-.88-.6.07-.59.07-.59.98.07 1.5 1 1.5 1 .87 1.5 2.27 1.07 2.82.82.09-.63.34-1.07.62-1.32-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.61.98A9.1 9.1 0 0 1 12 7.2c.8 0 1.61.11 2.37.32 1.81-1.24 2.61-.98 2.61-.98.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.65-2.23 4.46-4.35 4.7.35.3.66.88.66 1.78v2.64c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}


function SocialLinks() {
  return (
    <div className="social-icons">

      <a
        href="https://www.instagram.com/webdro26?igsh=MW9qa2lpN3Y5cWhnMw%3D%3D&igsi=MW9qa2lpN3Y5cWhnMw%3D%3D"
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
        href="https://wa.me/8883091192"
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

        <span className="label">
          START A PROJECT
        </span>


        <h2>
          Have an idea?
          <br />
          <em>Let's build it.</em>
        </h2>


        <p>
          Tell us what you're working on.
          We'll figure out the right digital
          direction together.
        </p>


        <a
          href="https://wa.me/8883091192"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          CONTACT US
          <span className="arrow">↗</span>
        </a>


        <div className="contact-socials">

          <span>
            Connect with Webdro
          </span>

          <SocialLinks />

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;