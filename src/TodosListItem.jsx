import React from "react";

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let listClass;
        let listPriority = this.props.priority;

        if (listPriority == 1) {
            listClass = "list-group-item list-group-item-success pb-0";
        } else if (listPriority == 2) {
            listClass = "list-group-item list-group-item-warning pb-0";
        }

        return (
            <li className="list-group-item list-group-item-success pb-0">
                <div className="form-group form-check m-0 float-left">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="todo-checkbox-name"
                    />
                    <label
                        className="form-check-label strike-through"
                        htmlFor="todo-checkbox-name"
                    >
                        {this.props.todo}
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
