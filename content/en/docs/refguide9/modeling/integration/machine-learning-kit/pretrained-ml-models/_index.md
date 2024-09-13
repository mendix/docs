---
title: "Pre-Trained ML Models"
url: /refguide9/machine-learning-kit/pretrained-ml-models/
weight: 20
---

{{% alert color="info" %}}Machine learning model support is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

## Introduction

The ONNX community provides an ML model repository, called [ONNX Model Zoo](https://github.com/onnx/models), where common computer vision and language models can be found. The [ONNX Model Zoo](https://github.com/onnx/models) is a collection of pre-trained, state-of-the-art models in the ONNX format contributed by community members. Accompanying each model are Jupyter Notebooks for model training and running inference with the trained model. The notebooks are written in Python and include links to the training dataset, as well as references to the original paper that describes the model architecture. All the ONNX models in the ONNX Zoo should be compatible with the *Mendix ML Kit*. You can pick up any model from this repository, customize it with your own data and integrate it in your Mendix app using the *ML Kit*.

## ONNX Model Zoo

Below, you can find the list of ONNX models in the ONNX Model Zoo. You can use these pre-trained models to build your business use cases similar to the ones listed above, or other types of use cases for your business.

Vision

* [Image Classification](https://github.com/onnx/models#image_classification)
* [Object Detection and Image Segmentation](https://github.com/onnx/models#object_detection)
* [Body, Face, and Gesture Analysis](https://github.com/onnx/models#body_analysis)
* [Image Manipulation](https://github.com/onnx/models#image_manipulation)

Language

* [Machine Comprehension](https://github.com/onnx/models#machine_comprehension)
* [Machine Translation](https://github.com/onnx/models#machine_translation)
* [Language Modelling](https://github.com/onnx/models#language_modelling)

Other

* [Visual Question Answering and Dialogue](https://github.com/onnx/models#visual_qna)
* [Speech and Audio Processing](https://github.com/onnx/models#speech)
* [Other interesting models](https://github.com/onnx/models#others)

### Additional Pre-Trained Models

[Hugging Face](https://huggingface.co/models?library=onnx&sort=downloads) provides open source pre-trained models (including datasets). You can find hundreds of ONNX models to perform tasks on different modalities such as text, vision, and audio.

## Integrate Pre-Built Models

To integrate a pre-built (propriety or public) ML model into a Mendix app, consider the following:

* Compatibility of the model internal representation (IR) version with the *ML Kit*
* Compatibility of the model OpSets with the *ML Kit*

Then, follow the instructions to [import an ML model and create the ML mapping document](/refguide9/machine-learning-kit/using-ml-kit/#import-model) in the *Using ML Kit* document.For details on versioning schemes, see the [Versioning](/refguide9/machine-learning-kit/using-ml-kit/#versioning) section of *Using ML Kit*.
