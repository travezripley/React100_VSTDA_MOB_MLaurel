import React from "react";
import TodosListItem from "./TodosListItem";
import TodosBlankState from "./TodosBlankState";

class TodosList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let blankState;

        if (!this.props.todos.length) {
            blankState = (
                <li className="list-group-item list-group-item-primary pb-0">
                    <p>
                        <span className="font-weight-bold">
                            Welcome to Very Simple Todo App!
                        </span>
                        <br />
                        Get started now by adding a new todo on the left
                    </p>
                </li>
            );
        }

        return (
            <div className="card">
                <div className="card-header">View Todos</div>
                <div className="card-body p-0">
                    <ul className="list-group">
                        {blankState}
                        {this.props.todos.map(todo => (
                            <TodosListItem
                                key={todo.id}
                                id={todo.id}
                                todo={todo.todo}
                                priority={todo.priority}
                                editEnabled={todo.editEnabled}
                                completed={todo.completed}
                                handleEventByType={this.props.handleEventByType}
                                handleSave={this.props.handleSave}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodosList;
