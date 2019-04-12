import React from "react";

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let listClass, listStrike;
        let listPriority = this.props.priority;

        if (listPriority == 1) {
            listClass = "success";
        } else if (listPriority == 2) {
            listClass = "warning";
        } else if (listPriority == 3) {
            listClass = "danger";
        }

        if (this.props.completed) {
            listStrike = "strike-through";
        }

        return (
            <li className={`list-group-item pb-0 list-group-item-${listClass}`}>
                <div className="form-group form-check m-0 float-left">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="todo-checkbox-name"
                        checked={this.props.completed}
                        onChange={() =>
                            this.props.handleCompleted(this.props.id)
                        }
                    />
                    <label
                        className={`form-check-label ${listStrike}`}
                        htmlFor="todo-checkbox-name"
                    >
                        {this.props.todo}
                    </label>
                </div>
                <div className="list-item-actions form-group float-right">
                    <a className="edit-todo p-2">
                        <i className="fas fa-edit" />
                    </a>
                    <a
                        className="delete-todo p-2"
                        onClick={() => this.props.handleDeleted(this.props.id)}
                    >
                        <i className="fas fa-trash-alt" />
                    </a>
                </div>
            </li>
        );
    }
}

export default TodosListItem;
