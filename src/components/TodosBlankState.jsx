import React from "react";

class TodosBlankState extends React.Component {
    render() {
        return (
            <li className="list-group-item list-group-item-primary pb-0">
                <p>
                    <span className="font-weight-bold">
                        Welcome to Very Simple Todo App!
                    </span>
                    <br />
                    Get started now by adding a new todo on the left
                </p>
            </li>
        );
    }
}

export default TodosBlankState;
