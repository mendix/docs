---
title: "Call ML Model"
url: /refguide/call-ml-model/
weight: 45
tags: ["ml kit", "call model", "ML microflow", "machine learning", "models"]
---

{{% alert color="info" %}}[Machine learning model](/refguide/machine-learning-kit/) support is currently in [Beta](/releasenotes/beta-features/), and is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

{{% alert color="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above supports machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy a ML model built using common ML framework and language into the Mendix Runtime.

Use the **Call ML Model** [activity](/refguide/activities/) in a microflow to call the ML model mapping document (see the [Using the Model in a Microflow](/refguide/machine-learning-kit/using-ml-kit/#use-model-microflow) section of *Integrate Machine Learning Models*).

To get started with machine learning models, check out [Using ML Kit](/refguide/machine-learning-kit/using-ml-kit/).

{{% alert color="info" %}}Check out a demo app and Jupyter notebook examples in our [ML Kit Demo Apps](https://github.com/mendix/mlkit-demo-apps) repository for detailed machine learning kit references.{{% /alert %}}

## 2 Properties

### 2.1 Action

* **ML model mapping** – the [ML model mapping](/refguide/ml-model-mapping/) model
* **Input object** – the inputObject, defined in the microflow with a [Create Object](/refguide/create-object/) or [Java Action Call](/refguide/java-action-call/), and expects the same object type (not the entity) as in the **model mapping**

### 2.2 Output

* **Output object** – name of the output object (for example, `outputObject`)
