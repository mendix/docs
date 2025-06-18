---
title: "Call ML Model"
url: /refguide/call-ml-model/
weight: 45
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction

Studio Pro supports machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy a ML model built using common ML framework and language into the Mendix Runtime.

Use the **Call ML Model** [activity](/refguide/activities/) in a microflow to call the ML model mapping document (see the [Using the Model in a Microflow](/refguide/machine-learning-kit/using-ml-kit/#use-model-microflow) section of *Integrate Machine Learning Models*).

To get started with machine learning models, check out [Using ML Kit](/refguide/machine-learning-kit/using-ml-kit/).

{{% alert color="info" %}}Check out a demo app and Jupyter Notebook examples in our [Demo for Mendix ML Kit](https://github.com/mendix/mlkit-example-app) repository for further information on working with machine learning models in Mendix.{{% /alert %}}

## Properties

### Action

* **ML model mapping** – the [ML model mapping](/refguide/ml-model-mapping/) model
* **Input object** – the inputObject, defined in the microflow with a [Create Object](/refguide/create-object/) or [Java Action Call](/refguide/java-action-call/), and expects the same object type (not the entity) as in the **model mapping**

### Output

* **Output object** – name of the output object (for example, `outputObject`)
