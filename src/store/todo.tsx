import { makeAutoObservable } from "mobx"

export interface ITodoItem {
    id: number;
    title: string;
    isCompleted: boolean;
}
export interface ITodo {
    todos: ITodoItem[];
    addTodo(todo: ITodoItem): void;
    removeTodo(id: number): void;
    toggleTodoStatus(todo: ITodoItem): void;
}

class Todo implements ITodo {
    todos: ITodoItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo = (todo: ITodoItem): void => {
        this.todos.push(todo);
    }

    removeTodo = (id: number): void => {
        console.log("removeTodo", id);
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleTodoStatus = (todo: ITodoItem): void => {
        todo.isCompleted = !todo.isCompleted;
        console.log("status now", todo.isCompleted);
    }

    fetchTodos = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json];
            })
    }
}

export default new Todo();