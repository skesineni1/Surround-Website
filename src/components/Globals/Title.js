import React from "react";

export default function Title({ title }) {
return (
    <div className="row">
    <div className="col text-center mb-5">
        <h1 className="display-5 text-capitalize font-weight-bold">{title}</h1>
    </div>
    </div>
);
}