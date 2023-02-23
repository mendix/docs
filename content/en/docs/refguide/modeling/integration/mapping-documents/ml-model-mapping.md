---
title: "ML Model Mapping"
url: /refguide/ml-model-mapping/
tags: ["ML kit", "ML model mapping", "machine learning", "models"]
---

[Machine learning model support is currently in [Beta](/releasenotes/beta-features/).

## 1 Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/] and above supports integrating machine learning models built using common AI framework and language into your Mendix Studio Pro apps.

For a list of supported models, see [Supported Frameworks and Libraries](/refguide/machine-learning-kit/#supported-frameworks).

## 2 Adding a Mapping to Your App

To add a ML model to your app, do the following:

1. Convert your model to ONNX format (see [Converting Your Model to ONNX](/refguide/machine-learning-kit/#convert-ml-model)).
2. Right-click on the module where you would like to add the mapping, and go to **Add other > ML model mapping**.
3. Click **Import model** to import your ONNX file.

For detailed information on working with machine learning models in Studio Pro, see [Integrate Machine Learning Models with ML Kit](/refguide/machine-learning-kit/).