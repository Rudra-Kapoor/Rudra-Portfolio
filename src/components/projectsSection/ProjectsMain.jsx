import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "BuzzChat: A Chat Application ",
    year: "Jan 2025",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://chatapp-1-im2m.onrender.com/",
  },
  {
    name: "Game Listing App",
    year: "Sep 2024",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://game-listing-4hhhc49vj-rudra-kapoors-projects.vercel.app/",
  },
  {
    name: "News-Portal Website",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://news-website-1-0wd2.onrender.com/",
  },

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link = {project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
