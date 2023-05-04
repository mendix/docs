---
title: "Logistic Regression Example"
url: /refguide/machine-learning-kit/using-ml-kit/logistic-regression/
category: Using ML Kit
weight: 20
tags: ["studio pro", "machine learning", "ml kit", "models", "integration", "example", "logistic regression"]
---
{{% alert color="info" %}}Machine learning model support is currently in [Beta](/releasenotes/beta-features/).{{% /alert %}}

## 1 Introduction

This document walks through the steps an example of a logistic regression model, its [netron.app](https://netron.app/) schema and the component display, along with the ML Mapping.  [Usage](/refguide/machine-learning-kit/using-ml-kit/#usage) section of *Using ML Kit* lists the steps you need to get started with integrating machine learning models into Studio Pro. 

{{% alert color="info" %}}Access the [ONNX file](https://github.com/mendix/mlkit-demo-apps/tree/main/mlsource/iris_logisticregression), [Jupyter notebook](https://github.com/mendix/mlkit-demo-apps/blob/main/notebooks/iris_lr.ipynb), and the [Java files](https://github.com/mendix/mlkit-demo-apps/tree/main/javasource/iris_logisticregression/proxies) for the logistic regressor example in the [Mendix ML Kit Demo Respository](https://github.com/mendix/mlkit-demo-apps#getting-started).{{% /alert %}}

## 2 Importing and Configuring the Model

The image below is the [netron.app](https://netron.app/) schema of a logistic regression model:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/ml-model-created-entities.png" alt="Example of the logistic regression netron.app schema." >}}

To integrate this in a Mendix app with the Mendix [Machine Learning Kit](/refguide/machine-learning-kit/), do the following:

1. [Import](/refguide/machine-learning-kit/using-ml-kit/#import-model) the [ONNX file](https://github.com/mendix/mlkit-demo-apps/tree/main/mlsource/iris_logisticregression) into Studio Pro by going to **Add other > ML model mapping**.

2. This creates a model mapping, as displayed in this image:

    {{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/output-type.png" alt="Example of a logistic regression." >}}

3. Resolve any errors by [configuring dynamic tensor shapes](/refguide/machine-learning-kit/using-ml-kit/#dynamic-shapes).

## 3 Using the Model

Once you have imported the model, you can start working with it by calling it in microflows.

1. Use the [Call ML model](/refguide/call-ml-model/) activity to call it in a microflow:

    {{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/call-ml-mapping.png" >}}

2. Create pre-processed inputs with **Create object** activity for inference inside your Mendix app. This activity is used for the first part in order to transfer entities from the domain model to the ML model input object:

    {{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/create-object.png" alt="Details of the log message in a microflow example." >}}

3. You can then consume the inference output with microflow [expressions](/refguide/expressions/), using a **Create variable** activity:

    {{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/create-variable.png" alt="Details of the log message in a microflow example." >}}

The complete microflow for making the inference is below:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/make-inference-microflow.png" >}}

The complete microflow to predict the IRIS flower classification using logistic regression is below:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/logistic-regression/predict-iris-class-microflow.png" >}}

{{% alert color="info" %}}Access the [ONNX file](https://github.com/mendix/mlkit-demo-apps/tree/main/mlsource/iris_logisticregression), [Jupyter notebook](https://github.com/mendix/mlkit-demo-apps/blob/main/notebooks/iris_lr.ipynb), and the [Java files](https://github.com/mendix/mlkit-demo-apps/tree/main/javasource/iris_logisticregression/proxies) for the logistic regressor example in the [Mendix ML Kit Demo Respository](https://github.com/mendix/mlkit-demo-apps#getting-started).{{% /alert %}}
