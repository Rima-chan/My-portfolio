import React, { useState, createContext } from 'react';

export const ProjectsDataContext = createContext();

export const ProjectsDataProvider = ({ children }) => {
    const [ data, setData ] = useState([]);
    return(
        <ProjectsDataContext.Provider value={{ data, setData }}>
            {children}
        </ProjectsDataContext.Provider>
    )
}