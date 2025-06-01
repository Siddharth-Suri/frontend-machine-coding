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
                    if (input.trim(" ") !== "") {
                        addTodo()
                    }
                }}
            >
                Add
            </button>
            <ul className="list-disc">
                {todo.map((t) => {
                    return (
                        <li
                            key={t.id}
                            className={` ${
                                t.completed ? "line-through" : ""
                            }  `}
                        >
                            <input
                                type="checkbox"
                                onClick={() => {
                                    strikethroughToggler(t.id)
                                }}
                            ></input>
                            <span>{t.text}</span>
                            <span>{t.completed}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
