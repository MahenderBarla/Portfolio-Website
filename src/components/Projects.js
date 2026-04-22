import "./Projects.css"
import foods from "../assets/food.png" 
import stocks from "../assets/stock.jpg"
import commerce from "../assets/ecommerce.jpg"
import srgym from "../assets/gym.jpeg"
//import srcar from "../assets/car.jpg"
import hub from "../assets/git.png"
import vedio from "../assets/image.png"

function Projects() {
  const projects = [
  {
    title: "Prevention of Phishing Website",
    description:
      "This project provides a platform for online banking transactions in a safe and secure way. This project uses the image based Steganography technology to conceal the user credentials by hidden image to avoid vulnerable attacks.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image:foods,
    githubLink: "https://github.com/MahenderBarla",
    demoLink: "#"
  },
  {
    title: "E-Commerece Website",
    description:
      "This web application provides a platform for online shopping and provides login for users. This website provides a user friendly interface so that any users can easily use this website.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    image:stocks,
    githubLink: "#",
    demoLink: "https://shopperdelightonline.netlify.app/"
  },
  
  {
    title: "Dictionary web Application",
    description:
      "This Dictionary web application that enables users to search for word definitions, synonyms, antonyms, and example sentences. It offers a user-friendly interface for vocabulary exploration and enrichment.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON Server"],
    image:srgym,
    githubLink: "#",
    demoLink: "#"
  },
  
  {
    title: "Bubble Sort Visualizer",
    description:
      "An interactive web-based tool that visually demonstrates how the works by step-by-step swapping of elements in real time.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: commerce,
    githubLink: "#",
    demoLink: "#"
  },
]

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} className="project-link github-link" target="_blank" rel="noreferrer" title="View Code on GitHub">
                  <img src={hub} alt="GitHub" className="icon" />
                </a>
                <a href={project.demoLink} className="project-link demo-link" target="_blank" rel="noreferrer" title="Watch Demo Video">
                  <img src={vedio} alt="Video" className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
