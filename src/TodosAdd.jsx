import React from "react";

class TodosAdd extends React.Component {
    render() {
        return (
                <div className="card">
                    <div className="card-header">Add New Todo</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="todo" className="font-weight-bold">
                                I want to..
                            </label>
                            <textarea
                                className="form-control"
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
                            <select className="form-control" id="priority">
                                <option>Select a Priority</option>
                            </select>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success btn-block">
                            Add
                        </button>
                    </div>
                </div>
        );
    }
}

export default TodosAdd;
