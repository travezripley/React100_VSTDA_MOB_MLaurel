import React from "react";

class TodosListItem extends React.Component {
    render() {
        return (
            <li className="list-group-item list-group-item-warning pb-0">
                <div className="form-group form-check m-0 float-left">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Pick up milk from the store
                    </label>
                </div>
                <div className="list-item-actions form-group float-right">
                    <a className="edit-todo p-2">
                        <i className="fas fa-edit" />
                    </a>
                    <a className="delete-todo p-2">
                        <i className="fas fa-trash-alt" />
                    </a>
                </div>
            </li>
        );
    }
}

export default TodosListItem;
