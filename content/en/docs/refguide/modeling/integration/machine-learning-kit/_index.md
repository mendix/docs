---
title: "Machine Learning Kit"
url: /refguide/machine-learning-kit/
category: Integration
weight: 35
tags: ["studio pro", "machine learning", "ml kit", "models", "integration"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
{{% alert color="info" %}}Machine learning model support is currently in [Beta](/releasenotes/beta-features/), and is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

## 1 Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above supports machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy a ML model built using common ML framework and language into Mendix Studio Pro runtime.

## 2 Under the Hood {#ml-kit-hood}

Mendix *ML Kit* is built with the Open Neural Network Exchange ([ONNX](https://onnx.ai/)), an open source framework [co-developed by Microsoft and Facebook](https://azure.microsoft.com/en-us/blog/microsoft-and-facebook-create-open-ecosystem-for-ai-model-interoperability/) to enable framework interoperability. ONNX is an open standard format representing machine learning models. Models trained with various frameworks, from scikit-learn to PyTorch or TensorFlow, can be converted to ONNX.

The ONNX Runtime is based on the ONNX standard, and is an optimized inference engine for efficiently running any model converted to the ONNX format across different hardware and operating systems with minimum effort. Due to this framework interoperability nature of ONNX, ONNX Runtime improves the development efficiency from model training to inference. With the ML Kit, we have extended Mendix runtime with ONNX runtime. ONNX bridges the gap between AI frameworks and Mendix.

## 3 Work with ML Kit

Learn more about the machine learning kit in the following documents:

* [Using ML Kit](/refguide/machine-learning-kit/using-ml-kit/), a comprehensive overview of working with machine learning model functionality in Studio Pro
* [Design Patterns](/refguide/machine-learning-kit/design-patterns/), an overview page that links to two documents about machine learning design patterns:
     * [Advanced Inference Design Patterns](/refguide/machine-learning-kit/design-patterns/advanced-inference/)
     * [Pre- and Post-Processor Design Patterns](/refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/)
* [ML model mapping](/refguide/ml-model-mapping/), an entry in the Studio Pro guide about the service document for machine learning models
* [Call ML Model](/refguide/call-ml-model/), about the microflow [activity](/refguide/activities/) to call an imported ML model in a microflow