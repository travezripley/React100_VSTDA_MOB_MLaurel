import React from "react";

class TodosEditItem extends React.Component {
    render() {
        return (
            <div className="row alert alert-success no-gutters m-0 rounded-0">
                <div className="form-group col-12">
                    <label htmlFor="todo" className="font-weight-bold">
                        Description
                    </label>
                    <textarea className="form-control" id="todo" rows="3" />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="priority" className="font-weight-bold">
                        Priority
                    </label>
                    <select className="form-control" id="priority">
                        <option>Select a Priority</option>
                    </select>
                </div>
                <div className="form-group col-1 offset-11 align-items-end">
                    <button className="btn btn-success">Save</button>
                </div>
            </div>
        );
    }
}

export default TodosEditItem;
