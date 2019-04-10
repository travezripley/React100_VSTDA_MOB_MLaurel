import React from "react";

class TodosListItem extends React.Component {
    render() {
        return (
            <div className="row alert alert-warning no-gutters m-0 rounded-0">
                <div className="col-11">
                    <div className="form-group form-check m-0">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Pick up milk from the store
                        </label>
                    </div>
                </div>
                <div className="col-1">
                    <i className="fas fa-trash-alt red float-right p-1" />
                    <i className="fas fa-edit blue float-right p-1" />
                </div>
            </div>
        );
    }
}

export default TodosListItem;
