---
title: "ML Model Mapping"
url: /refguide/ml-model-mapping/
weight: 25
description: "Introduces machine learning (ML) model integration used to deploy a ML model."
---

## Introduction

Studio Pro supports machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy a ML model built using common ML framework and language into the Mendix Runtime.

For a list of supported models, see the [Supported Frameworks and Libraries](/refguide/machine-learning-kit/using-ml-kit/#supported-frameworks) section in *Using ML Kit*.

## Adding a ML Mapping to Your App

To add a ML model to your app, do the following:

1. Convert your model to ONNX format (see the [Converting Your Model to ONNX](/refguide/machine-learning-kit/using-ml-kit/#convert-ml-model) section in *Using ML Kit*).
2. Right-click on the module where you would like to add the mapping, and go to **Add other > ML model mapping**.
3. Click **Import model** to import your ONNX file.

## Read More

* An introduction to the [Machine Learning Kit](/refguide/machine-learning-kit/)
* Detailed information on [using ML Kit](/refguide/machine-learning-kit/using-ml-kit/).
* Learn about machine learning [Design Patterns](/refguide/machine-learning-kit/design-patterns/), including [Advanced Inference Design Patterns](/refguide/machine-learning-kit/design-patterns/advanced-inference/) and [Pre- and Post-Processor Design Patterns](/refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/)
