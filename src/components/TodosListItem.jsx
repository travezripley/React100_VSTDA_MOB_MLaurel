import React from "react";

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            priority: this.props.priority
        };
        this.handleEditedItem = this.handleEditedItem.bind(this);
    }

    handleEditedItem(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let listClass, listStrike;
        let listPriority = this.props.priority;

        if (listPriority == 1) {
            listClass = "danger";
        } else if (listPriority == 2) {
            listClass = "warning";
        } else if (listPriority == 3) {
            listClass = "warning";
        }

        if (this.props.completed) {
            listStrike = "strike-through";
        }

        return (
            <li className={`list-group-item pb-0 list-group-item-${listClass}`}>
                {!this.props.editEnabled ? (
                    <div className="listMode">
                        <div className="form-group form-check m-0 float-left">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="todo-checkbox-name"
                                checked={this.props.completed}
                                onChange={() =>
                                    this.props.handleEventByType(
                                        "completed",
                                        this.props.id
                                    )
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
                            <a
                                className="edit-todo p-2"
                                onClick={() =>
                                    this.props.handleEventByType(
                                        "edited",
                                        this.props.id
                                    )
                                }
                            >
                                <i className="fas fa-edit" />
                            </a>
                            <a
                                className="delete-todo p-2"
                                onClick={() =>
                                    this.props.handleEventByType(
                                        "deleted",
                                        this.props.id
                                    )
                                }
                            >
                                <i className="fas fa-trash-alt" />
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="editMode ">
                        <div className="row no-gutters m-0 rounded-0">
                            <div className="form-group col-12">
                                <label
                                    htmlFor="todo"
                                    className="font-weight-bold"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="form-control update-todo-text"
                                    id="todo"
                                    name="todo"
                                    rows="3"
                                    value={this.state.todo}
                                    onChange={this.handleEditedItem}
                                />
                            </div>
                            <div className="form-group col-6">
                                <label
                                    htmlFor="priority"
                                    className="font-weight-bold"
                                >
                                    Priority
                                </label>
                                <select
                                    className="form-control update-todo-priority"
                                    id="priority"
                                    name="priority"
                                    value={this.state.priority}
                                    onChange={this.handleEditedItem}
                                >
                                    <option>Select a Priority</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Low</option>
                                </select>
                            </div>
                            <div className="form-group col-12">
                                <button
                                    onClick={() =>
                                        this.props.handleSave(
                                            this.props.id,
                                            this.state.todo,
                                            this.state.priority
                                        )
                                    }
                                    className="btn btn-success float-right create-todo"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </li>
        );
    }
}

export default TodosListItem;
