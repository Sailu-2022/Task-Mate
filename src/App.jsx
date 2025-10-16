import ProgressTracker from "./Components/ProgressTracker";
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";



function App() {
  return(
    <div>
    <h1>Task - Mate</h1>
    <p>our friendly task scheduler</p>
    <Taskform/>
    <Tasklist/>
    <ProgressTracker/>
    <button >Clear All Tasks</button>
    </div>
  )
}
export default App;