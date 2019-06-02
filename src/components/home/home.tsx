import React from 'react'
import { connect } from 'react-redux'
import { MouseEvent } from 'react'; 

import {findTodos , addTodos, deleteTodos } from '../../logic/todos/thunks';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../logic/store';
import { TodosActions } from '../../logic/todos/actions';
import { Todo } from '../../logic/todos/types';




type Props = {}
    & ReturnType<typeof mapStateToProps>
    & { dispatch: ThunkDispatch<StoreState, undefined, TodosActions> }
    
    

type State = { value: string }

class Home extends React.Component<Props, State> {
    state = {
        value: '',
    }

    componentDidMount() {
        this.props.dispatch(findTodos());
        
    }

    onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value });
    }

    onSubmit = (event:MouseEvent ) => {
        event.preventDefault();

        this.props.dispatch(addTodos(this.state.value))
    }
    onDelete = (event:MouseEvent, todoToDelete: Todo) =>{
        event.preventDefault();
        this.props.dispatch(deleteTodos(todoToDelete))
    }
    render() {
        return (
            <div className="Home">
                <h1>Todo List</h1>
                <input type="text" value={this.state.value} onChange={this.onChange}></input>
                <button onClick={this.onSubmit} value="submit">Enviar</button>
                <ul>
                {this.props.todos.data
                    && this.props.todos.data.map((todo:Todo) => (
                        <li key={`HOME_TODO_${todo}`}>{todo} <button onClick={(e) => this.onDelete(e, todo)} value="submit">Delete</button></li>
                    ))}
                </ul>
            </div>
        )
    }



}
const mapStateToProps = (state: StoreState) => {
    return { todos: state.todos}
}

export default connect(mapStateToProps)(Home)

