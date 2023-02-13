import { useState } from "react"

export function Task({ text }) {
  const [visible, setVisible] = useState(true)
  const [completed, setCompleted] = useState("on progress")

  const removeElement = () => {
    setVisible((prev) => !prev)
  }
  return (
    visible && (
      <tr className={completed}>
        <td></td>
        <td>{text}</td>
        <td>{completed}</td>
        <td>
          <button
            disabled={completed === "completed"}
            onClick={() => {
              setCompleted("completed")
            }}
          >
            done
          </button>
          <button
            onClick={() => {
              removeElement()
            }}
          >
            remove
          </button>
        </td>
      </tr>
    )
  )
}
