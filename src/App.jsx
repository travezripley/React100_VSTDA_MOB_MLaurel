import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12">Very Simple Todo App</h1>
                    <p className="col-12">Track all of the things</p>
                </div>
                <div className="row">
                    <div className="col-4">
                      <div className="card">
                        <div className="card-header">Add New Todo</div>
                      </div>
                    </div>
                    <div className="col-8" />
                </div>
            </div>
        );
    }
}

export default App;
