import React, { useState, useEffect, useMemo }from 'react'
import './UserCardStyle.css'
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import data from "./data.json";

function Board(props) {
    const [ project, setProject ] = useState(props.project);
    const [ toDoList, setToDoList] = useState(props.project.list);

    useEffect(
      ()=>{
        setProject(props.project);
        setToDoList(props.project.list);
        console.log("props changed");
      },[props.project]
    )

    

    const updateInfo = (list) =>{
      let copy = {...props.project};
      copy["list"] = list;
      props.updateGroup(parseInt(copy["groupID"]), copy);
    }

    const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
    updateInfo(mapped);
    
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
    updateInfo(filtered);
    
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
    updateInfo(copy);

  }

  return (
    <div className="App">
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default Board