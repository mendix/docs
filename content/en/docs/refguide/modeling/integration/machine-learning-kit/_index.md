---
title: "Machine Learning Kit"
url: /refguide/machine-learning-kit/
weight: 26
description: "Introduces the Machine Learning (ML) Kit, used to deploy a machine learning model built using common ML framework."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Studio Pro supports a unique approach to machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy a machine learning model built using common ML framework and language into the Mendix Runtime.

{{% alert color="info" %}}Check out a demo app and Jupyter Notebook examples in our [Demo for Mendix ML Kit](https://github.com/mendix/mlkit-example-app) repository for further information on working with machine learning models in Mendix.{{% /alert %}}

## Under the Hood {#ml-kit-hood}

Mendix *ML Kit* is built with the Open Neural Network Exchange ([ONNX](https://onnx.ai/)), an open source framework [co-developed by Microsoft and Facebook](https://azure.microsoft.com/en-us/blog/microsoft-and-facebook-create-open-ecosystem-for-ai-model-interoperability/) to enable framework interoperability. ONNX is an open standard format representing machine learning models. Models trained with various frameworks, from scikit-learn to PyTorch or TensorFlow, can be converted to ONNX.

The ONNX Runtime is based on the ONNX standard, and is an optimized inference engine for efficiently running any model converted to the ONNX format across different hardware and operating systems with minimum effort. Due to this framework interoperability nature of ONNX, ONNX Runtime improves the development efficiency from model training to inference. With the ML Kit, we have extended the Mendix Runtime with ONNX Runtime. ONNX bridges the gap between AI frameworks and Mendix.

To get started, see [Converting Your Model to ONNX](/refguide/machine-learning-kit/using-ml-kit/#convert-ml-model) in *Using ML Kit*.

## Work with ML Kit

Learn more about the machine learning kit in the following documents:

* [Using ML Kit](/refguide/machine-learning-kit/using-ml-kit/), a comprehensive overview of working with machine learning model functionality in Studio Pro
    * [Logistic Regression Example](/refguide/machine-learning-kit/using-ml-kit/logistic-regression/), an example of the end-to-end flow of integrating an ML model into Studio Pro
* [Pre-Trained ML Models](/refguide/machine-learning-kit/pretrained-ml-models/), a list of pre-trained models you can use with *Mendix ML Kit*
* [Design Patterns](/refguide/machine-learning-kit/design-patterns/), an overview page that links to two documents about machine learning design patterns:
    * [Advanced Inference Design Patterns](/refguide/machine-learning-kit/design-patterns/advanced-inference/)
    * [Pre- and Post-Processor Design Patterns](/refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/)
* [ML model mapping](/refguide/ml-model-mapping/), an entry in the Studio Pro guide about the service document for machine learning models
* [Call ML Model](/refguide/call-ml-model/), about the microflow [activity](/refguide/activities/) to call an imported ML model in a microflow

## Read More

* [Introducing the Mendix ML Kit for Low-Code ML Deployment](https://www.mendix.com/blog/introducing-the-mendix-ml-kit-for-low-code-deployment/)
