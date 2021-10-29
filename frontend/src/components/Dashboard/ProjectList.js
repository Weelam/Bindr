import React, { useState } from 'react'
import data from './data.json'
import Board from './Board';


function ProjectList() {
    const [projects, setProjects] = useState(data);
    const [selectedProjectID, setSelectedProjectID] = useState(1);
    const handleGroupClick = (id) =>{
        setSelectedProjectID(id);

    };
    return (
        <div>

            <ul id="projectlist">
                <li>
                    <div class="projectlisttitle">
                    Projects
                    </div>
                </li>
                {projects.map(function (project, index) {
                    return (

                        <li class='project' onClick={() => handleGroupClick(project.id)}>
                            <img class="projectimg" src={project.image} />
                            <div class="projectname">
                                {project.projectname}
                            </div>
                        </li>



                    )
                })}
            </ul>
            

            <div id="board"><Board /></div>
        </div>
    )
}

export default ProjectList
