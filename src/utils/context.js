import React, { useState, createContext } from 'react';
import projects from '../data/projectsData';

export const ProjectsDataContext = createContext();

export const ProjectsDataProvider = ({ children }) => {
    const [ data, setData ] = useState([]);
    return(
        <ProjectsDataContext.Provider value={{ data, setData }}>
            {children}
        </ProjectsDataContext.Provider>
    )
}