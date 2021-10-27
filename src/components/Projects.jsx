import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { ProjectsDataContext } from "../utils/context";
import { projects } from '../data/data.js';

function Projects() {
    const { data, setData} = useContext(ProjectsDataContext);
    setData(projects.data);
    return(
        <>
        <div className="container mx-auto my-14" id="projects">
            <h2 className="uppercase text-4xl text-center font-bold mt-10 mb-16">Projets</h2>
            <div className="flex flex-wrap md:flex-nowrap gap-8">
                {data && data.map((project) => (
                    <ProjectCard project={project} key={project.id}></ProjectCard>
                ))}
                {/* {data && data.map((project) => (
                    <p key={project.id}>{project.title}</p>
                ))} */}
            </div>
        </div>
        </>
    );
}

export default Projects;