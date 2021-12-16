import { createContext, useContext, useState, useCallback } from "react";

export const ProjectContext = createContext();

export const useProjectContext = () => {
    const state = useContext(ProjectContext);
    return state;
}

// const initialProjectState = { 
//     title: '', 
//     contractor: '', 
//     location: '',
//     startDate: '', 
//     dueDate: '', 
//     imageUrl: '', 
//     description: '', 
//     lead: '', 
//     team: [],
//     creator:''
// };

export const ProjectProvider = ({
    children
}) => {
    const [project, setProject] = useState({});

    const addProject = useCallback((project) => {
        setProject({project});

    }, []);
    

    return (
        <ProjectContext.Provider value={{project, addProject}} >
            { children }
        </ProjectContext.Provider>
    )
};