---
title: "Call ML Model"
url: /refguide9/call-ml-model/
weight: 45
---

{{% alert color="info" %}}[Machine learning model](/refguide9/machine-learning-kit/) support is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

{{% alert color="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above supports machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy a ML model built using common ML framework and language into the Mendix Runtime.

Use the **Call ML Model** [activity](/refguide9/activities/) in a microflow to call the ML model mapping document (see the [Using the Model in a Microflow](/refguide9/machine-learning-kit/using-ml-kit/#use-model-microflow) section of *Integrate Machine Learning Models*).

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/ml-kit-activities/call-ml-model.png" alt="The Call ML Model activity." class="no-border" >}}

To get started with machine learning models, check out [Using ML Kit](/refguide9/machine-learning-kit/using-ml-kit/).

{{% alert color="info" %}}Check out a demo app and Jupyter Notebook examples in our [Demo for Mendix ML Kit](https://github.com/mendix/mlkit-example-app) repository for further information on working with machine learning models in Mendix.{{% /alert %}}

## Properties

### Action

* **ML model mapping** – the [ML model mapping](/refguide9/ml-model-mapping/) model
* **Input object** – the inputObject, defined in the microflow with a [Create Object](/refguide9/create-object/) or [Java Action Call](/refguide9/java-action-call/), and expects the same object type (not the entity) as in the **model mapping**

### Output

* **Output object** – name of the output object (for example, `outputObject`)
