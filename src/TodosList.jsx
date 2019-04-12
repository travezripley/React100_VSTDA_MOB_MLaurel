import React from "react";
import TodosBlankState from "./TodosBlankState";
import TodosEditItem from "./TodosEditItem";
import TodosListItem from "./TodosListItem";

class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">View Todos</div>
                <div className="card-body p-0">
                    <ul className="list-group">
                        {!this.state.todos.length && <TodosBlankState />}
                        {/* {this.state.todos.map((todo, index) => ( */}
                        <TodosEditItem />
                        <TodosListItem />
                        <TodosListItem />
                        <TodosListItem />
                        {/* ))} */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodosList;
