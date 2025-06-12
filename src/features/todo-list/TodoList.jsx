import react from "react"
import { useState } from "react"

export const TodoList = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])

    function strikethroughToggler(id) {
        setTodo(
            todo.map((i) => {
                if (i.id == id) {
                    return {
                        ...i,
                        completed: !i.completed,
                    }
                } else {
                    return { ...i }
                }
            })
        )
    }
    function addTodo() {
        setTodo((prev) => {
            return [...prev, { id: todo.length, text: input, completed: false }]
        })
        setInput("")
    }

    function deleteItem(id) {
        setTodo((prev) => {
            {
                return prev.filter((todo) => todo.id !== id)
            }
        })
    }
    return (
        <div>
            <input
                type="text"
                value={input}
                placeholder="Enter a todo"
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            ></input>

            <button
                onClick={() => {
                    if (input.trim() !== "") {
                        addTodo()
                    }
                }}
            >
                Add
            </button>
            <ul className="list-disc pl-5">
                {todo.map((t) => (
                    <li key={t.id}>
                        <div className="flex  items-center gap-4">
                            <input
                                type="checkbox"
                                checked={t.completed}
                                onChange={() => strikethroughToggler(t.id)}
                            />
                            <span
                                className={
                                    t.completed
                                        ? "line-through flex-1 justify-items-center"
                                        : "flex-1 justify-items-center"
                                }
                            >
                                {t.text}
                            </span>
                            <button
                                onClick={() => deleteItem(t.id)}
                                className="p-2 text-white bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
