import { observer } from "mobx-react";
import todoStore from "./store/todo";

const Todo = observer(() => {
    return (
        <div>
            <button onClick={() => todoStore.fetchTodos()}>
                Fetch todo
            </button>
            {todoStore.todos.map(todo => {
                return (
                    <div className="todo" key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => todoStore.toggleTodoStatus(todo)}
                            />
                            <span>{todo.title}</span>
                        </label>
                        <button onClick={() => todoStore.removeTodo(todo.id)}>
                            X
                        </button>
                    </div>
                )
            })}
        </div>
    )
})

export default Todo;