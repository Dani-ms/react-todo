import { Todo } from "./types";

const TODOS_KEY = "todos";

export default {
    findTodos: (): Promise<Todo[]> => {
        return new Promise((resolve)=> {
            setTimeout(() => {
                const data = localStorage.getItem(TODOS_KEY)
                const savedTodos:Todo [] = data ? JSON.parse(data) : [];

                resolve(savedTodos)
            }, 500)
        })
    },
    addTodo: (todo: Todo) : Promise<Todo[]>=> {
        return new Promise((resolve)=> {
            setTimeout(() => {
                const data = localStorage.getItem(TODOS_KEY)
                const savedTodos: Todo[] = data ? JSON.parse(data) : [];

                const changedTodos = [
                    ...savedTodos,
                    todo
                ]

                localStorage.setItem(TODOS_KEY, JSON.stringify(changedTodos))

                resolve(changedTodos);
            }, 500)
        })
    },
    deleteTodo: (todoToDelete : Todo) => {
        return new Promise((resolve)=> {
            setTimeout(() => {
                const data = localStorage.getItem(TODOS_KEY)
                const savedTodos: Todo [] = data ? JSON.parse(data) : [];
               
                const changedTodos =  savedTodos.filter((t)=> t !== todoToDelete) ;

                localStorage.setItem(TODOS_KEY,JSON.stringify(changedTodos));

                resolve(changedTodos);
            }, 500)
        })
    },
}