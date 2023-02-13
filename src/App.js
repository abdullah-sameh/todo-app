import './App.css'
import ToDo from "./components/ToDo"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ToDo text={text} setText={setText} tasks={tasks} setTasks={setTasks} />
      <Results tasks={tasks} />
    </div>
  )
}

export default App
