
export default function ToDo({ text, setText, tasks, setTasks }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        text && setTasks([...tasks, text])
        setText("")
      }}
    >
      <input
        type="text"
        value={text}
        autoFocus
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button type="submit" disabled={!text}>
        Save
      </button>
    </form>
  )
}
