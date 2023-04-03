---
title: "Logistic Regression Example"
url: /refguide/machine-learning-kit/using-ml-kit/logistic-regression/
category: Using ML Kit
weight: 20
tags: ["studio pro", "machine learning", "ml kit", "models", "integration"]
---
{{% alert color="info" %}}Machine learning model support is currently in [Beta](/releasenotes/beta-features/), and is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

## 1 Introduction

The [Usage](/refguide/machine-learning-kit/using-ml-kit/#usage) section of *Using ML Kit* lists the steps you need to follow to set up and usage machine learning 

The images below show an example of a logistic regression, its [netron.app](https://netron.app/) schema and the component display, along with the ML Mapping.



{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/output-type.png" alt="Example of a logistic regression." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/ml-model-created-entities.png" alt="Example of a netron.app schema." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/call-ml-mapping.png" alt="Example of the mapping call." >}}

Create pre-processed inputs with **Create object** activity for inference inside your Mendix app, and consume the inference output with microflow [expressions](/refguide/expressions/).

A **Create Object** activity is used for the first part in order to transfer entities from the domain model to the ML model input object. 

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/create-object.png" alt="Details of the log message in a microflow example." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/create-variable.png" alt="Details of the log message in a microflow example." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/change-object.png" alt="Details of the log message in a microflow example." >}}