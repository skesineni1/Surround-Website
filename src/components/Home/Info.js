import React from "react";
import Title from "../Globals/Title";
import { Link } from "gatsby";
export default function Info() {
return (
    <section className="py-3">
    <div className="container">
        <Title title="About Surround" />
        <div className="row">
        <div className="col-100 col-sm-100 mx-auto text-center">
            <p className="lead text-muted mb-50"><i>
"Surround is a lightweight framework for serving machine learning pipelines in Python. It is designed to be flexible, easy to use and to assist data scientists by focusing them on the problem at hand rather than writing glue code. Surround began as a project at the Applied Artificial Intelligence Institute to address the following problems:
The same changes were required again and again to refactor code written by data scientists to make it ready for serving e.g. no standard way to run scripts, no standard way to handle configuration and no standard pipeline architecture.
Existing model serving solutions focus on serving the model rather than serving an end-to-end solution. Our machine learning projects require multiple models and glue code to tie these models together.
Existing serving approaches do not allow for the evolution of a machine learning pipeline without re-engineering the solution i.e. using a cloud API for the first release before training a custom model much later on.
Code was commonly being commented out to run other branches as experimentation was not a first class citizen in the code being written."
            </i></p>
            <Link to="/about/">
            <button className="btn text-uppercase btn-yellow">
                About >>
</button>
            </Link>
        </div>
        </div>
    </div>
    </section>
);
}
