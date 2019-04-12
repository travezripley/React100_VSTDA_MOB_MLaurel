import React, { Component } from "react";
import TodosHeader from "./TodosHeader";
import TodosAdd from "./TodosAdd";
import TodosList from "./TodosList";

const todosData = [
    {
        id: 0,
        text: "Take out the trash",
        priority: 2,
        editEnabled: true,
        completed: false
    }
]

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
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
                        <TodosAdd />
                    </div>
                    <div className="col-8">
                        <TodosList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
