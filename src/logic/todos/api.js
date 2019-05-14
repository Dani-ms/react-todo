const TODOS_KEY = "todos";

export default {
    findTodos: () => {
        return new Promise((resolve)=> {
            setTimeout(() => {
                const data = localStorage.getItem(TODOS_KEY)
                const savedTodos = data ? JSON.parse(data) : [];

                resolve(savedTodos)
            }, 500)
        })
    },
    addTodo: (todo) => {
        return new Promise((resolve)=> {
            setTimeout(() => {
                const data = localStorage.getItem(TODOS_KEY)
                const savedTodos = data ? JSON.parse(data) : [];

                const changedTodos = [
                    ...savedTodos,
                    todo
                ]

                localStorage.setItem(TODOS_KEY, JSON.stringify(changedTodos))

                resolve(changedTodos);
            }, 500)
        })
    },
    deleteTodo: (todoToDelete) => {
        return new Promise((resolve)=> {
            setTimeout(() => {
                const data = localStorage.getItem(TODOS_KEY)
                const savedTodos = data ? JSON.parse(data) : [];
               
                const changedTodos = savedTodos.filter((t)=> t !== todoToDelete) ;

                localStorage.setItem(TODOS_KEY,changedTodos);

                resolve(changedTodos);
            }, 500)
        })
    },
}