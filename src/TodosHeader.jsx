import React from "react";

const TodosHeader = props => (
    <div className="row">
        <h1 className="col-12 text-white">{props.title}</h1>
        <p className="col-12 text-white">{props.subtitle}</p>
    </div>
);

export default TodosHeader;
