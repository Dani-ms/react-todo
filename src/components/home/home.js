import React from 'react'
import { connect } from 'react-redux'

import {findTodos , addTodos, deleteTodos } from '../../logic/todos/thunks';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    componentDidMount() {
        this.props.dispatch(findTodos());
        
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.dispatch(addTodos(this.state.value))
    }
    onDelete = (e, todoToDelete) =>{
        e.preventDefault();
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
                    && this.props.todos.data.map((todo) => (
                        <li key={`HOME_TODO_${todo}`}>{todo} <button onClick={(e) => this.onDelete(e, todo)} value="submit">Delete</button></li>
                    ))}
                </ul>
            </div>
        )
    }



}
const mapStateToProps = state => {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(Home)

