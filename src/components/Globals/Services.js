import React from "react";
import Title from "../Globals/Title";

const Services = () => (
    <div className = "services">
        <div class="container">
        <Title title="Surround Services" />

        
            <div class="row services">
            <div class="col-md-3 text-center">
        <div class="icon">
<i class="fa fa-desktop"></i>
</div>
                <h3>Building Examples</h3>
                <p>You can develop many examples using surround like prediction and any other analytical models </p>
                </div>
<div class="col-md-3 text-center">
<div class="icon">
<i class="fa fa-sitemap"></i>
</div>
                <h3>ML Pipelines</h3>
                <p>Provides framework for serving machine learning pipelines in python</p>
                </div>
            <div class="col-md-3 text-center">
        <div class="icon">
<i class="fa fa-cogs"></i>
</div>
                <h3>Serving the Models</h3>
                <p>Focuses on serving the model rather than serving End-to-End solution</p>
                </div>
            <div class="col-md-3 text-center">
        <div class="icon">
<i class="fa fa-wrench"></i>
</div>
                <h3>Usage of API'S</h3>
                <p>Using the existent API'S like AWS Recognition, Google Cloud etc, as part of your implementation</p>
                </div></div>
    </div>
    </div>
)

export default Services