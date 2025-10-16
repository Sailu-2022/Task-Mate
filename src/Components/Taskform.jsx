
export default function Taskform() {
  return (

    <form>
        <div>
            <input type="text" placeholder="enter the task" />
            <button type="submit">Add Task</button>
        </div>
        <div>
            <select>
                <option value="High">High</option>
                <option value="Meduim">Medium</option>
                <option value= "Low">Low</option>

            </select>
            <select>
                <option value="General">General</option>
                <option value="work">Work</option>
                <option value= "Personal">Personal</option>

            </select>
        </div>
    </form>
  )
}
