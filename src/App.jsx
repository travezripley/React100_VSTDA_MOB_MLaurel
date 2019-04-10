import React, { Component } from "react";
import TodosHeader from "./TodosHeader";
import TodosAdd from "./TodosAdd";
import TodosList from "./TodosList";

class App extends Component {
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
