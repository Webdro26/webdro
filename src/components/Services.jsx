import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Website Development",
    desc: "High-performance websites built around your brand, users and business goals.",
  },
  {
    n: "02",
    title: "Software Development",
    desc: "Scalable digital systems that turn ideas and workflows into reliable software.",
  },
  {
    n: "03",
    title: "UI/UX Design",
    desc: "Clear, engaging interfaces designed to make products easier to understand and use.",
  },
  {
    n: "04",
    title: "Mobile App Development",
    desc: "Modern mobile experiences designed for real users and real business outcomes.",
  },
  {
    n: "05",
    title: "Digital Marketing",
    desc: "Creative and performance-focused marketing that helps brands reach the right audience.",
  },
  {
    n: "06",
    title: "Automation & AI Content Creation",
    desc: "Smart workflows that reduce repetitive work and AI-powered visuals and videos created for campaigns, products and social media.",
  },
  {
    n: "07",
    title: "Graphic Designing",
    desc: "Creative visuals designed to make your brand stand out and connect with your audience.",
  },
  {
    n: "08",
    title: "Business Intelligence",
    desc: "Dashboards and data experiences that turn information into better decisions.",
  },
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function ServiceCard({ service, index }) {
  return (
    <motion.a
      href="#contact"
      className="service-card compact-service-card"

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
        amount: 0.15,
      }}

      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.07,
        ease: "easeOut",
      }}

      whileHover={{
        y: -8,
      }}
    >
      <div className="card-number">
        {service.n}
      </div>

      <div className="service-arrow">
        <Arrow />
      </div>

      <div className="service-main">
        <h3>
          {service.title}
        </h3>

        <p>
          {service.desc}
        </p>
      </div>

      <div className="service-line"></div>
    </motion.a>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="section services section-pad"
    >
      <div className="section-head">

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

      </div>

      <div className="services-grid compact-services-grid">

        {services.map((service, index) => (
          <ServiceCard
            key={service.n}
            service={service}
            index={index}
          />
        ))}

      </div>
    </section>
  );
}

export default Services;