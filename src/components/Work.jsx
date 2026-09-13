import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "Undr Ctrl",
    type: "Burger Brand Website",
    cls: "project-one",
    image: "/projects/undr-ctrl.png",
    link: "https://undrctrlburgers.in/",
  },

  {
    n: "02",
    title: "Anvith Dazzle",
    type: "Jewellery Website",
    cls: "project-two",
    image: "/projects/anvith-dazzle.png",
    link: "https://anvithdazzle.in/",
  },
   {
    n: "03",
    title: "VBuild Ventures",
    type: "Construction Company Website",
    cls: "project-three",
    image: "/projects/vbuild-ventures.png",
    link: "https://vbuildventures.com/",
  },
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function Work() {
  return (
    <section
      id="work"
      className="section section-pad work"
    >

      <div className="section-head">

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

      </div>


      <div className="work-grid compact-work-grid">

        {projects.map((project) => (

          <motion.a
            href={project.link || "#contact"}

            target={
              project.link
                ? "_blank"
                : undefined
            }

            rel={
              project.link
                ? "noopener noreferrer"
                : undefined
            }

            className={`project compact-project ${project.cls}`}

            key={project.n}

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
              duration: 0.55,
              ease: "easeOut",
            }}

            whileHover={{
              y: -6,
            }}
          >

            <div className="project-visual">

              <img
                src={project.image}
                alt={`${project.title} website`}
                className="project-image"
              />

              <span className="project-view">
                View Project ↗
              </span>

            </div>


            <div className="project-meta">

              <span>
                {project.n}
              </span>

              <div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.type}
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

export default Work;