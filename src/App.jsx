import React, { Component } from "react";
import TodosHeader from "./TodosHeader";
import TodosList from "./TodosList";

const todosData = [
    {
        id: 0,
        text: "Take out the trash",
        priority: 1,
        editEnabled: false,
        completed: false,
        addText: "",
        addPriority: ""
    },
    {
        id: 1,
        text: "Pick up milk from the store",
        priority: 2,
        editEnabled: false,
        completed: false,
        addText: "",
        addPriority: ""
    },
    {
        id: 2,
        text: "Pick up kids from school",
        priority: 3,
        editEnabled: false,
        completed: false,
        addText: "",
        addPriority: ""
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            id: 0,
            text: "",
            priority: 0,
            editEnabled: false,
            completed: false,
            addText: "",
            addPriority: ""
        };
    }

    render() {
        return (
            <div className="container-fluid mt-3 mb-3">
                <TodosHeader
                    title="Very Simple Todo App"
                    subtitle="Track all of the things"
                />
                <div className="row">
                    <div className="col-4">
                        {/* TodosAdd */}
                        <div className="card">
                            <div className="card-header">Add New Todo</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label
                                        htmlFor="todo"
                                        className="font-weight-bold"
                                    >
                                        I want to..
                                    </label>
                                    <textarea
                                        className="form-control create-todo-text"
                                        id="todo"
                                        rows="3"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="priority"
                                        className="font-weight-bold"
                                    >
                                        How much of a priority is this?
                                    </label>
                                    <select
                                        className="form-control create-todo-priority"
                                        id="priority"
                                    >
                                        <option>Select a Priority</option>
                                        <option value="1">High</option>
                                        <option value="2">Medium</option>
                                        <option value="3">Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success btn-block create-todo">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <TodosList todos={todosData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
