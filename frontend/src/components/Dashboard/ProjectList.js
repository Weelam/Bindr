import React, { useState, useEffect} from 'react'
// import Board from './Board';
import Button from '@mui/material/Button'; 

function ProjectList(props) {

    const [projects, setProjects] = useState(props.groups);
    // const [user, setCurUser ] = useState(props.currentUser);
    const [selectedProjectID, setSelectedProjectID] = useState(0);
    const handleGroupClick = (id) =>{
        setSelectedProjectID(parseInt(id));
        props.updateDisplayingProject(id);
    };
    

    useEffect(()=>{
        setProjects(props.groups);
    },[props.groups])


    return (
        <div id="projectListContainer">
        

            
                    
                
                {projects.map(function (project, index) {
                    return (

                        <Button key={index} id = {project.groupID === selectedProjectID ? 'selected' : ''} className='project' onClick={() => handleGroupClick(project.groupID)}>
                            <img className="projectimg" src={project.image} alt=""/>
                            
                                {project.projectname}
                            
                        </Button>



                    )
                })}
           
           
        
            {/* <div id="board"><Board project={projects[selectedProjectID]} updateGroup={props.updateGroup}/></div> */}
        
        </div>
    )
}

export default ProjectList
