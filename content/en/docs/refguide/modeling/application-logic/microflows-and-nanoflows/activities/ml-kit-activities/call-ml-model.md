---
title: "Call ML Model"
url: /refguide/call-ml-model/
weight: 45
tags: ["ml kit", "call model", "ML microflow", "machine learning", "models"]
---

{{% alert color="info" %}}[Machine learning model](/refguide/machine-learning-kit/) support is currently in [Beta](/releasenotes/beta-features/) and is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

{{% alert color="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above supports integrating machine learning models into your Mendix Studio Pro apps.

Use the **Call ML Model** [activity](/refguide/activities/) in a microflow to call the ML model mapping document (see the [Using the Model in a Microflow](/refguide/machine-learning-kit/#use-model-microflow) section of *Integrate Machine Learning Models with ML Kit*).

## 2 Properties

### 2.1 Action

* **ML model mapping** – the [ML model mapping](/refguide/ml-model-mapping/) model
* **Input object** – the inputObject, defined in the microflow with a [Create Object](/refguide/create-object/) or [Java Action Call](/refguide/java-action-call/), and expects the same object type (not the entity) as in the **model mapping**

### 2.2 Output

* **Output object** – name of the output object (for example, `outputObject`)