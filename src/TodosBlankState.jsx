import React from "react";

class TodosBlankState extends React.Component {
    render() {
        return (
            <div className="row alert alert-primary no-gutters m-0 rounded-0">
                <div className="col-12">
                    <p>
                        <span className="font-weight-bold">
                            Welcome to Very Simple Todo App!
                        </span>
                        <br />
                        Get started now by adding a new todo on the left
                    </p>
                </div>
            </div>
        );
    }
}

export default TodosBlankState;
