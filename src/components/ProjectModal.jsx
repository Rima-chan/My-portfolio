import { useState } from 'react';
import TagComp from './TagComp';
import Carousel from './Carousel';


function ProjectModal(props) {
    const [ showModal, setShowModal ] = useState(false);
    const tags = props.project.tags;
    return(
        <>
        <div 
          className="group flex flex-col items-center justify-center w-full text-center cursor-pointer pb-5 px-3 md:px-2 group-hover:bg-gray-300 group-hover:bg-opacity-40 transition-colors duration-200 ease-in-out"
          onClick={() => setShowModal(true)}>
                <span className="inline-block w-full text-center pt-4"><i className="fas fa-arrow-down text-2xl text-red-500 animate-bounce group-hover:text-gray-800"></i></span>
                <h3 className="font-semibold uppercase pt-2">{props.project.title}</h3>
                <p className="font-light uppercase text-sm pt-3">{props.project.langages}</p>
        </div>
        { showModal ? (
            <>
            <div className="flex justify-between items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto mx-auto max-w-3xl max-h-screen">
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
                                <div className="">
                                    <Carousel images={props.project.attachments}></Carousel>
                                </div>
                                <div className="flex flex-col w-full sm:px-5">
                                    <h4 className="uppercase font-medium text-left text-lg">{props.project.type}</h4>
                                    <p className="text-left mt-3 mb-3">{props.project.description}</p>
                                    <div className="flex flex-wrap justify-start space-x-2">
                                        {tags.map((tag, index) => (
                                            <TagComp tag={tag} key={`${tag}-${index}`}></TagComp>
                                        ))}
                                    </div>
                                    <div className="divide-x divide-gray-600 divide-opacity-20 mt-5">
                                        {props.project.url ? (
                                            <a href={props.project.url} className="uppercase text-sm font-medium mt-5 px-3 hover:text-red-500 transition-colors duration-200 ease-in" target="_blank" rel="noreferrer"><i className="fas fa-link pr-3"></i>Visiter le site</a>
                                        ) : null}
                                        {props.project.github ? (
                                            <a href={props.project.github} className="uppercase text-sm font-medium mt-5 px-3 hover:text-red-500 transition-colors duration-200 ease-in" target="_blank" rel="noreferrer"><i className="fab fa-github pr-3"></i>Repo Git</a>
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