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
                    {/* Blank State */}
                    <TodosBlankState />
                    {/* Edit Form */}
                    <TodosEditItem />
                    {/* Todo items */}
                    <TodosListItem priority="" />
                </div>
            </div>
        );
    }
}

export default TodosList;
