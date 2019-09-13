---
path: /Blog/Surround-CLI-vs-DVC
date: 2019-08-08
summary: This blog provides comparison between Surround CLI and DVC.
tags: [SurroundCLI, DVC, Comparison]
title: Surround CLI VS DVC
---


#*<u>VERSION CONTROL</u>*

*Version control is easy to revert back to previous versions. It is also known as revision control or source control it manages the changes to documents, computer programs and other collections of information. It solves the web application frame work problems such as connecting to databases, managing configuration, rendering static and dynamic content and handling security concerns.*

#<u>SURROUND CLI VS DVC</u>

##<u>SURROUND AI CLI</u>

*Surround AI is a Python Frame work designed for Flexible usage in AI. It supports Data Scientist in their work progress. Surround AI is developed both for researchers and developers. It is developed and maintained by Applied Artificial intelligence institute(A2I2).*

##Pros:

####Single place for both engineers and researchers:

Surround was built to resolve some competing requirements of both researchers and engineers. Where in general, researchers want to dive into the data and leave code quality to later, and engineers prefer well structured code from the start. We attempt to solve this problem with Surround by introducing a production first mindset and providing conventions for researchers by creating a separate folder for data exploration scripts. 

####Easy Mode of Interaction:
Machine Learning projects has special concerns such as Experimentation, managing and versioning the data and models, visualizing the model performance. 
Surround AI provides single place for every concern that arises while creating Machine learning project. Easy mode of interaction between Several machine learning pipelines together.

##Cons:

One of the concern with Surround AI is Init, while creating the project the project name can be given only in lower case.

##Example for building machine 

<b> To generate new project:</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$ surround init <path-to-dir> --project-name sample --description "Sample" --require-web
</p>
</div> 

<b>To test the generated pipeline in root of the project:</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$ surround run batch_local
</p>
</div> 

<b>To run the pipeline in batch mode:</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$ surround run batch
</p>
</div> 

<b>To run the pipeline in webendpoints mode:</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$ surround run web
</p>
</div> 

<b>To view all available tasks:</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$ surround run
</p>
</div> 

##<u>DVC</u>

*DVC is a open source tool for data science and machine learning projects. It is built to make models shareable and reproducible. It is designed to handle large files data sets and machine learning models.DVC is built to track everything in a reproducible and easily accessible way.*

*DVC pipelines have version controlled steps in a typical machine learning work flow for example data loading, cleaning, feature engineering and training etc. Basically it is built to track everything in a reproducible and easily accessible way.*

##<b>Example for building machine learning pipeline</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$mkdir example && cd example
</p>
</div> 

<b>Adding dataset and changes to git repository</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$git add data/path</p>

$git commit -m add dataset
</div> 

<b>Split training and testing datasets</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$dvc run -d split_train_test.py
</p>
</div> 

<b>Train the machine learning model</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$dvc run -d train_model.py
</p>
</div> 

<b>Evaluating the model</b> 

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$dvc run -d evaluate.py
</p>
</div> 

<b>Showing the results</b>

<div style="background-color:C1BFC6;color:black;padding:px;">
  <p>$dvc metrics show
</p>
</div>

###Pros

####Usage of DAG:

DVC makes data science projects reproducible by automatically building data dependency graph(DAG) DAG is used to reproduce part of pipeline which were affected by recent changes.

####Cache memory:

DVC handles caching of intermediate results and does not run a steps again if input data or coded the same.

###Cons

####Security Concern:

Risk in configuring pipeline incorrectly. Generally, In DVC while configuring pipelines, forgetting to add any dependencies or an output file does not issue a warnings or an error in the initial stage. But, later the results might get incorrect or when it throws errors. It is necessary to check DVC pipelines steps for missing dependences or files. In Dvc unit testing fails to detect errors.

####Similarity in both Surround AI CLI and DVC

Both Surround AI CLI and DVC are used in reproducibility. both are similar to GIT in many ways but it also provides tracking of the steps dependable, the steps dependences between the code and data files and all code running datafile and all code running arguments so it combines version control for the code and for the database.
