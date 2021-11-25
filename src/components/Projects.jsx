import { useContext, useEffect, useState } from "react";
import { ProjectsDataContext } from "../utils/context";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";
import Alert from "./Alert";
import { apiUrl, config } from '../data/configData';

function Projects() {
    const { data, setData} = useContext(ProjectsDataContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const errorMessage = 'Oups, nous avons eu un problème...N\'hésitez pas à aller visiter mon GitHub pour voir mes projets';
    const fetchData = async() => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${apiUrl}/projects`);
            console.log(response.data);
            setData(response.data);
        } catch(e) {
            console.log(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return(
        <>
        <div className="px-8 md:mx-8 md:px-0 lg:mx-10 xl:mx-16 mt-10 mb-14" id="projects">
            <h2 className="uppercase md:text-4xl text-3xl tracking-widest text-center font-bold mb-8 sm:mt-10 sm:mb-16">Projets</h2>
            <div className="self-center md:w-3/4 lg:w-1/2 mx-auto">
                { isLoading ? (<Spinner></Spinner>) : null}
                { error ? (<Alert classes={'bg-red-600 border-red-600 text-red-600 font-semibold'} icon={'fas fa-exclamation-triangle'} content={errorMessage}></Alert>) : null }
            </div>
            <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data && data.map((project) => (
                    <ProjectCard project={project} key={project.id}></ProjectCard>
                ))}
            </section>
        </div>
        </>
    );
}

export default Projects;