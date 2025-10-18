import { useState } from "react"

export default function Taskform({addTask}) {
    const [task,setTask]= useState('');
    const [priority, setPriority]= useState('medium');
    const [category, setCategory] = useState('General');

    const handlesubmit = (e) => {
        e.preventDefault();
        addTask({text: task,priority,category,completed:false});
          
        setTask('');
        setPriority('Medium');
        setCategory('General');
    }
  return (

    <form onSubmit={handlesubmit} className="task-form">
        <div id="inp">
            <input type="text" placeholder="enter the task"value={task} 
            onChange ={(e) => setTask(e.target.value)}/>
            <button type="submit">Add Task</button>
            {/*<h1>{task} {priority} {category}</h1>*/}
        </div>
        <div id="btns">
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Meduim">Medium</option>
                <option value= "Low">Low</option>

            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
 
                <option value="General">General</option>
                <option value="work">Work</option>
                <option value= "Personal">Personal</option>

            </select>
        </div>
    </form>
  )
}
