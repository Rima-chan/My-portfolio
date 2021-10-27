import ProjectCard from "./ProjectCard";
import { useContext, useEffect, useState } from "react";
import { ProjectsDataContext } from "../utils/context";
import projects from '../data/projectsData';

function Projects() {
    const { data, setData} = useContext(ProjectsDataContext);
    useEffect(() => {
        projects.find()
            .then(response => {
                console.log(response.projects);
                setData(response.projects);
                console.log(data)
            })
    }, [setData, data]);
    return(
        <>
        <div className="container mx-auto" id="projects">
            <h2 className="uppercase text-4xl text-center font-bold my-10">Projets</h2>
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