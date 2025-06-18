---
title: "Advanced Inference Design Patterns"
url: /refguide/machine-learning-kit/design-patterns/advanced-inference/
weight: 35
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Integrating Models with Pre-processors and Post-processors](/refguide/machine-learning-kit/using-ml-kit/#pre-post-processors) section of *Integrate Machine Learning Models* outlines considerations when importing a machine learning model with advanced processing needs. What are the standards for these models, and what do they look like? 

This document explores four common advanced inference design patterns for machine learning models. These include the following:

* [Ensembles](#ensembles)
* [Cascaded inference](#cascaded-inference) patterns
* [Machine learning model as a service](#maas) patterns
* [Batch inference](#batch-inference) patterns

{{% alert color="info" %}}To view all of the examples from the sections below, check out the demo app in our [Demo for Mendix ML Kit Repository](https://github.com/mendix/mlkit-example-app#getting-started). The **Getting Started** section includes instructions on using the demo app.{{% /alert %}}

### Ensembles {#ensembles}

Ensemble models are used when dealing with a lot of variance on a dataset or many features versus a relatively low number of data available. Ensemble models are a machine learning approach to combine multiple other models, called *base estimators*, in the prediction process. Ensemble models offer a solution to overcome the technical challenges of building a single estimator. In this approach, the same data points are sent to a group of models and then collect all the predictions to find the best prediction.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/design-pattern-ensembles.png" alt="." class="no-border" >}}

You can create ensemble models in Mendix building a separate microflow for each model, then combine the predictions in another microflow. The example shows an ensemble of two models.

An example of a domain model of an ensemble model:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/ensembles-domain-model.png" alt="." class="no-border" >}}

An example of the sample microflow:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/ensembles-example-microflow.png" alt="." class="no-border" >}}

### Cascaded Inference {#cascaded-inference}

The Cascaded Inference pattern refers to the ability to feed the output of one model into another in a cascade pattern. 

It is used to compensate for a model bias, or incomplete data, in such a way you could use another predictor to compensate for that. In this case, a potential implementation looks pretty much like a graphical representation of this pattern:

An example of a microflow:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/cascaded-inference-microflow.png" alt="." class="no-border" >}}

A model pre-processor makes some data available for the first model, and the output is injected into the second model as an input. Ultimately, that output is used for the final prediction.

### Machine Learning MaaS (Model as a Service) {#maas}

A common pattern in machine learning deployment is using a microservice or a service. While Studio Pro supports monolith applications with its security and speed advantages, creating a microservice is possible by servers [publishing a REST service](/howto/integration/publish-rest-service/) and clients [calling the service](/refguide/call-rest-action/). 

In this way, the AI-powered smart app can be split into two Mendix apps: one to host the ML model, and one to process and use the predictions. This is a good approach for use cases where the ML model is complex and requires heavy computing power, or when the ML model is owned and maintained by another team. Another advantage is that you can update the ML model without the need for deploying the Mendix client app.

Below is an example of such deployment. Instead of actually storing the variable after predicting the elements in an image, the variable is encoded as JSON and then published.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/maas-sample-microflow.png" alt="Sample microflow for a Maas, as explained in the paragraph above." class="no-border" >}}

### Batch Inference {#batch-inference}

A common pattern for machine learning applications is the ability to run multiple inferences with a single request for the model, or batch inference. This is just a special case of [Dynamic Shapes](/refguide/machine-learning-kit/using-ml-kit/#dynamic-shapes), in which the first dimension is dynamic:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/resnet50-dynamic-parameter.png" alt="Mapping of a ResNet50 with first parameter dynamic." class="no-border" >}}

You can add 1 as the first element and the model will work with a batch size of 1, or whatever figure you desire and work with any elements at the time:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/restnet-50-batch-size-10.png" alt="ResNet50 with a batch size of 10." class="no-border" >}}

Adjust your pre/post processor to send/receive the correct batch size.
