import React from "react";
import TodosBlankState from "./TodosBlankState";
import TodosEditItem from "./TodosEditItem";
import TodosListItem from "./TodosListItem";

class TodosList extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">View Todos</div>
                <div className="card-body p-0">
                    <ul className="list-group">
                        <TodosBlankState />
                        <TodosEditItem />
                        <TodosListItem />
                        <TodosListItem />
                        <TodosListItem />
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodosList;
