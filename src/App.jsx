import React, { Component } from "react";
import TodosHeader from "./TodosHeader";
import TodosList from "./TodosList";

const sampleData = [
    {
        id: 0,
        todo: "Take out the trash",
        priority: 1,
        editEnabled: false,
        completed: true
    },
    {
        id: 1,
        todo: "Pick up milk from the store",
        priority: 2,
        editEnabled: false,
        completed: false
    },
    {
        id: 2,
        todo: "Pick up kids from school",
        priority: 3,
        editEnabled: false,
        completed: false
    }
];

let id = 3;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: sampleData
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleDeleted = this.handleDeleted.bind(this);
        this.handleEdited = this.handleEdited.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { todos } = this.state,
            todo = this.refs.todo.value,
            priority = this.refs.priority.value;
        this.setState(
            {
                todos: [
                    ...todos,
                    {
                        id: id++,
                        todo,
                        priority,
                        editEnabled: false,
                        completed: false
                    }
                ]
            },
            () => {
                this.refs.todo.value = "";
                this.refs.priority.value = "";
            }
        );
    }

    handleCompleted(id) {
        let items = this.state.todos;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items[i].completed = !items[i].completed;
            }
        }
        this.setState({ todos: items });
    }

    handleDeleted(id) {
        let items = this.state.todos;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items.splice(i, 1);
            }
        }
        this.setState({ todos: items });
    }

    handleEdited(id) {}

    render() {
        return (
            <div className="container-fluid mt-3 mb-3">
                <TodosHeader
                    title="Very Simple Todo App"
                    subtitle="Track all of the things"
                />
                <div className="row">
                    <div className="col-4">
                        <form onSubmit={this.handleSubmit}>
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
                                            ref="todo"
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
                                            ref="priority"
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
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-block create-todo"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-8">
                        <TodosList
                            todos={this.state.todos}
                            handleCompleted={this.handleCompleted}
                            handleDeleted={this.handleDeleted}
                            handleEdited={this.handleEdited}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
