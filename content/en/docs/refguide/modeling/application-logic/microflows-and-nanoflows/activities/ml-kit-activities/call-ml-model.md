---
title: "Call ML Model"
url: /refguide/call-ml-model/
weight: 45
tags: ["ml kit", "call model", "ML microflow", "machine learning", "models"]
---

[Machine learning model support is currently in [Beta](/releasenotes/beta-features/).

{{% alert color="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/] and above supports the Mendix Machine Learning (ML) Kit [link to concept doc above], a way to integrate ML models—built using the common AI framework and language—into your Mendix Studio Pro apps.

Use the **Call ML Model** activity in a microflow to call the ML model mapping document (see the [Using the Model in a Microflow](#use-model-microflow) section of *Integrate Machine Learning Models with ML Kit*).

## 2 Properties

### 2.1 Action

* **ML model mapping** – the [ML model mapping](/refguide/ml-model-mapping/) model
* **Input object** – the inputObject, defined in the microflow with a [Create Object](/refguide/create-object/) or [Java Action Call](/refguide/java-action-call/)

### 2.2 Output

* **Output object** – name of the output object (for example, `outputObject`)

More more detailed information on using the **Call ML Model** in a microflow, see the [Using the Model in a Microflow](#use-model-microflow) section of *Integrate Machine Learning Models with ML Kit*.