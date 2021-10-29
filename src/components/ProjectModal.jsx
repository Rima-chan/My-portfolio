import { useState } from 'react';
import TagComp from './TagComp';


function ProjectModal(props) {
    const [ showModal, setShowModal ] = useState(false);
    const tags = props.project.tags;
    return(
        <>
        <button
          aria-label="Ouvrir details projet"
          className="outline-none focus:outline-none font-semibold uppercase pl-3"
          type="button"
          onClick={() => setShowModal(true)} 
        >   
            {props.project.title}
            <i className="fas fa-link pl-3" aria-label="Plus d'infos sur le projet"></i>
        </button>
        { showModal ? (
            <>
            <div className="flex justify-between items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div 
                      className="border-0 rounded-lg shadow-lg relative bg-gray-50 flex flex-col w-full outline-none focus:outline-none animate-fade-in">
                        <div className="flex justify-between border-b border-solid border-gray-300 rounded-t">
                            <h3 className="uppercase font-semibold text-lg px-5 py-5">{props.project.title}</h3>
                            <button
                            aria-label="Fermer details projet"
                            className="outline-none focus:outline-none text-black pr-5 ml-auto bg-transparent border-0 leading-none block"
                            onClick={() => setShowModal(false)}
                            >
                            <i className="fas fa-times fa-lg"></i>
                            </button>
                        </div>
                        <div className="relative flex-auto">
                            
                            <div className="flex xs:flex-col md:flex-row px-6 pt-5 pb-8">
                                <img className="sm:w-1/2 sm:self-center pb-6" height="200" src={props.project.attachments[0]} alt="Screen mobile et tablette"></img>
                                <div className="flex flex-col w-full sm:px-5">
                                    <h4 className="uppercase font-medium text-left">{props.project.type}</h4>
                                    <p className="text-left text-sm mt-3 mb-3">{props.project.description}</p>
                                    <div className="flex flex-wrap justify-start space-x-2">
                                        {tags.map((tag, index) => (
                                            <TagComp tag={tag} key={`${tag}-${index}`}></TagComp>
                                        ))}
                                    </div>
                                    <div className="divide-x divide-gray-600 divide-opacity-20 mt-5">
                                        {props.project.url ? (
                                            <a href={props.project.url} className="uppercase text-sm font-medium mt-5 px-3" target="_blank" rel="noreferrer">Visiter le site</a>
                                        ) : null}
                                        {props.project.github ? (
                                            <a href={props.project.github} className="uppercase text-sm font-medium mt-5 px-3" target="_blank" rel="noreferrer">Repo Git</a>
                                        ) : null}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null }
        </>
    );
}

export default ProjectModal;