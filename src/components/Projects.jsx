import ProjectCard from "./ProjectCard";
import { useContext, useEffect } from "react";
import { ProjectsDataContext } from "../utils/context";
import { projects } from '../data/data.js';

function Projects() {
    const { data, setData} = useContext(ProjectsDataContext);
    useEffect(() => {
        setData(projects.data);
    }, [setData])
    return(
        <>
        <div className="px-8 md:mx-8 md:px-0 lg:mx-10 xl:mx-16 mt-10 mb-14" id="projects">
            <h2 className="uppercase md:text-4xl text-3xl tracking-widest text-center font-bold mb-8 sm:mt-10 sm:mb-16">Projets</h2>
            <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data && data.map((project) => (
                    <ProjectCard project={project} key={project.id}></ProjectCard>
                ))}
                {/* {data && data.map((project) => (
                    <p key={project.id}>{project.title}</p>
                ))} */}
            </section>
        </div>
        </>
    );
}

export default Projects;