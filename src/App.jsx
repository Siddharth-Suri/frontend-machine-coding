import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { TodoList } from "./features/todo-list/TodoList"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <TodoList></TodoList>
        </div>
    )
}

export default App
