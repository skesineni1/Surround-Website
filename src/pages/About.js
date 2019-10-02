import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


const Aboutpage = () => (
  <Layout>
    <SEO title="ABOUT PAGE" />
    <h1 id="surround">SURROUND</h1>
<h5 id="providing-framework-for-machine-learning">PROVIDING FRAMEWORK FOR MACHINE LEARNING</h5>
<p>What is Surround?</p>
<p>Surround is a lightweight framework for serving machine learning pipelines in Python. It is designed to be flexible, easy to use and to assist data scientists by focusing them on the problem at hand rather than writing code. Surround was initiated by&nbsp;<a href="https://a2i2.deakin.edu.au/?_ga=2.89224082.883259530.1567654397-616601693.1516780416">Applied Artificial Intelligence Institute</a>&nbsp;and it is under development.</p>
<h1 id="components-of-surround">COMPONENTS OF SURROUND</h1>
<p>Surround mainly works with the help of four components</p>
<ul>
<li>Assembler</li>
<li>Stages</li>
<li>Data</li>
<li>Configuration</li>
</ul>
<h2 id="assembler">ASSEMBLER</h2>
<p>The assembler is one of the main components in surround framework. This component is responsible for constructing and executing a pipeline of data in surround framework.</p>
<code> surround.assembler.Assembler(assembler name=&rsquo;&rsquo;, validator=<span class="ot">None</span>, estimator=<span class="ot">None</span>, config=<span class="ot">None</span>)</code>
<blockquote>
<p>This class function is responsible for executing the surround pipeline.</p>
</blockquote>
<table>
<thead>
<tr class="header">
<th align="left">Parameter</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">Assembler name, name of the pipeline</td>
<td align="left">string</td>
</tr>
<tr class="even">
<td align="left">Validator</td>
<td align="left">surround.stage.validator</td>
</tr>
<tr class="odd">
<td align="left">Estimator</td>
<td align="left">surround.stage.estimator</td>
</tr>
<tr class="even">
<td align="left">Config</td>
<td align="left">surround.config.config</td>
</tr>
</tbody>
</table>
<p>The execution of data depends on what mode is currently being used.There are three different modes namely&nbsp;<strong>training</strong>,&nbsp;<strong>batch-predict</strong>&nbsp;and&nbsp;<strong>web-predict</strong>&nbsp;based on which surround pipeline is constructed. #### TRAINING In this mode a sample data is given which has a sufficient number of examples which will allow the algorithm to learn. Different algorithm is tested to identify which will suite the training data. Once the training mode is done the data will be fed to the visualizer which will display the information to data scientists about the training operation. Data will be loaded from the disk with the estimator set to fit mode. Estimator is used to give a model depending on the data and parameters. This is a sample data which is used to fit the model.</p>
<pre class="sourceCode python"><code class="sourceCode python">assembler.init_assembler(batch_mode=<span class="dt">bool</span>)
assembler.run(data, is_training=<span class="dt">bool</span>)</code></pre>
<h4 id="batch-mode">BATCH MODE</h4>
<p>This is also known as validation in which additional data will be provided which is similar to that of the training data but the parameters will be tuned. This set of data is known as validation set which is used to measure the error content by running through the algorithms. The algorithm which produces the least number of errors will be chosen for machine learning purposes.</p>
<pre class="sourceCode python"><code class="sourceCode python">assembler.init_assembler(batch_mode=<span class="dt">bool</span>)
assembler.run(data, is_training=<span class="dt">bool</span>)</code></pre>
<p>Batch mode is used to determine whether the visualizer should be used after each stage has been executed. #### WEB MODE This is build for production purposes. When the pipeline is done after the training and evaluation process, this mode will be used to serve the pipeline. The input depends on the project which has been generated and the local disk will store the results.Input may come from local disk or from a HTTP request.</p>
<pre class="sourceCode python"><code class="sourceCode python">assembler.init_assembler(batch_mode=<span class="dt">bool</span>)
assembler.run(data, is_training=<span class="dt">bool</span>)</code></pre>
<p>Mainly it is used to handle the input request coming from POST request.</p>
<h2 id="stages">STAGES</h2>
<p>These modes will be executed by passing the data through different stages</p>
<p>Input data --&gt; Validator --&gt; Prefilters --&gt; Estimator --&gt; Postfilters --&gt; Visualizer --&gt; Result data</p>
<h4 id="validation-dataset">VALIDATION DATASET</h4>
<p>This is used to evaluate a given model actually works well with the real set of data. We can&rsquo;t be sure about the results which we will get once the approved model has been used on real data and so this step is helpful in getting the accuracy prediction of the model that will be used. This step will give us the difference on how the model behaves in respect to the test and actual data. #### FILTERS Filters are responsible for gathering data ready for the next stage of execution. It is classified into two pre-filters and post-filters. ###### WRANGLERS (PRE-FILTERS) This is helpful in converting one format of data into other which can be used for upcoming stages. ###### DECIDERS (POST-FILTERS) Deciders, placed after Estimators, are stages which make decision based on the output of them. #### ESTIMATORS Estimators is the phase where actual prediction of surround takes place. Prediction is made depending on the configuration used in surround pipeline. In Surround this is done as another instance of an assembler which runs separately.</p>
<pre class="sourceCode python"><code class="sourceCode python"> <span class="kw">def</span> set_estimator(<span class="ot">self</span>, estimator=<span class="ot">None</span>, pre_filters=<span class="ot">None</span>, post_filters=<span class="ot">None</span>);</code></pre>
<blockquote>
<p>This is used to set the estimator during the execution of the pipeline. #### VISUALIZERS Visualizers generally denotes output. Right from the start where the machine learning pipeline is initiated and all the way through the working phases, visualizers are useful in giving us the knowledge about how the model works with the selected data.</p>
</blockquote>
<pre class="sourceCode python"><code class="sourceCode python"> <span class="kw">def</span> set_visualizer(<span class="ot">self</span>, visualizer);</code></pre>
<blockquote>
<p>This is used to set the visualizer that will be executed after batch/train mode.</p>
</blockquote>
<h1 id="configuration">CONFIGURATION</h1>
<p>This contains all the settings loaded in from YAML files. This file will be created with every instance of the assembler and will be passed between each stages of the pipeline.</p>
<pre class="sourceCode python"><code class="sourceCode python"><span class="kw">class</span> surround.config.config(project_root=<span class="ot">None</span>, package_path=<span class="ot">None</span>,auto_load=<span class="ot">False</span>)</code></pre>
<blockquote>
<p>This is responsible for building and storing the data in config.yaml file.</p>
</blockquote>
<blockquote>
<p>When prefixed with surround it will allow environmental variable to override data.</p>
</blockquote>
<blockquote>
<p>This is responsible for providing read-only access to the stored config files.</p>
</blockquote>
<h1 id="data">DATA</h1>
<p>These objects contain the input data and has information about the errors which are being identified. This also holds the data of every stage.</p>
<h1 id="surround-community">SURROUND COMMUNITY</h1>
<p>Join Surround AI developer community contribute and learn about Surround. This&nbsp;<a href="https://github.com/a2i2/surround">GITHUB</a>&nbsp;link can be used to report issues, learn, develop surround features.</p>
  </Layout>
);



export default Aboutpage;
