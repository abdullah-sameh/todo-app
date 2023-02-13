import { Task } from "./Task"

export default function Results({ tasks }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <td>No.</td>
          <td>Todo item</td>
          <td>status</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => {
          return <Task text={task} key={i} />
        })}
      </tbody>
    </table>
  )
}
