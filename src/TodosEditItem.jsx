import React from "react";

class TodosEditItem extends React.Component {
    render() {
        return (
            <li className="list-group-item list-group-item-success pb-0">
                <div className="row no-gutters m-0 rounded-0">
                    <div className="form-group col-12">
                        <label htmlFor="todo" className="font-weight-bold">
                            Description
                        </label>
                        <textarea
                            className="form-control update-todo-text"
                            id="todo"
                            rows="3"
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="priority" className="font-weight-bold">
                            Priority
                        </label>
                        <select
                            className="form-control update-todo-priority"
                            id="priority"
                        >
                            <option>Select a Priority</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </div>
                    <div className="form-group col-12">
                        <button className="btn btn-success update-todo float-right">
                            Save
                        </button>
                    </div>
                </div>
            </li>
        );
    }
}

export default TodosEditItem;
