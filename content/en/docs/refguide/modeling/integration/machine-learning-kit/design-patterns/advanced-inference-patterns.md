---
title: "Advanced Inference Design Patterns"
url: /refguide/machine-learning-kit/design-patterns/advanced-inference/
category: Design Patterns
weight: 35
tags: ["studio pro", "machine learning", "ml kit", "models", "design patterns"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
{{% alert color="info" %}}[Machine learning model](/refguide/machine-learning-kit/) support is currently in [Beta](/releasenotes/beta-features/), and is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

## 1 Introduction

### 1.1 Ensembles

When dealing with a lot of variance on a dataset or many features versus a relatively low number of data available, you can use ensemble models. Ensemble models are a machine learning approach to combine multiple other models, called base estimators, in the prediction process. Ensemble models offer a solution to overcome the technical challenges of building a single estimator. In this approach, the same data points are sent to a group of models and then collect all the predictions to find the best prediction.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/design-pattern-ensembles.png" alt="." >}}

You can create ensemble models in Mendix building a separate microflow for each model, then combine the predictions in another microflow. The example shows an ensemble of two models.

Domain Model of an ensemble model:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/ensembles-domain-model.png" alt="." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/ensembles-example-microflow.png" alt="." >}}

### 1.2 Cascaded Inference

This pattern refers to the ability to feed the output of one model into another, in a cascade pattern. Normally it is used to compensate for a model bias, or incomplete data, in such a way you could use another predictor to compensate for that. In this case, a potential implementation looks pretty much like a graphical representation of this pattern:

Example Microflow

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/cascaded-inference-microflow.png" alt="." >}}

We have a model pre-processor that makes some data available for the first model, which output is injected into the second model as an input. Ultimately, that output will be used for the final prediction.

### 1.3 Machine Learning MaaS (Model as a Service)

Another common pattern in machine learning deployment is use a microservice or a service. While Studio Pro excels at creating monolith applications with all its security and speed advantages, creating a microservice is possible by servers [publishing a REST service](/howto/integration/publish-rest-service/) and clients [calling the service](/refguide/call-rest-action/). In this way, the AI-powered smart app can be split into two Mendix apps: one to host the ML model, and one to process and use the predictions. This is a good approach for use cases where the ML model is complex and requires heavy computing power, or when the ML model is owned and maintained by another team. Another advantage is that you can update the ML model without the need for deploying the Mendix client app.

Below you can see an an example of such deployment. Instead of actually storing the variable after predicting the elements in an image, the variable could be encoded as JSON and then published.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/maas-sample-microflow.png" alt="." >}}

### 1.4 Batch Inference

Another common pattern for ML applications is the ability to run multiple inferences with a single request for the model, or batch inference. This is just a special case of Dynamic Shapes (See 2.2.2), in which the first dimension is dynamic:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/log-message.png" alt="Mapping of a ResNet50 with first parameter dynamic." >}}

You can add 1 as the first element and the model will work with a batch size of 1, or whatever figure you desire and work with n elements at time:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/advanced-inference-patterns/resnet50-dynamic-parameter.png" alt="ResNet50 with a batch size of 10." >}}

Remember to properly adjust your pre/post processor to send/receive the proper batch size.

