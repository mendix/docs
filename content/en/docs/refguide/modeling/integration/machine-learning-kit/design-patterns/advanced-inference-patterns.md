---
title: "Advanced Inference Design Patterns"
url: /refguide/machine-learning-kit/design-patterns/advanced-inference/
category: Design Patterns
weight: 35
tags: ["studio pro", "machine learning", "ml kit", "models", "design patterns"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
[Machine learning model support is currently in [Beta](/releasenotes/beta-features/).

## 1 Introduction

1.1 Ensembles

When dealing with a lot of variance on a dataset or many features versus a relatively low number of data available, you can use ensemble models. Ensemble models are a machine learning approach to combine multiple other models, called base estimators, in the prediction process. Ensemble models offer a solution to overcome the technical challenges of building a single estimator. In this approach, the same data points are sent to a group of models and then collect all the predictions to find the best prediction.


![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673961063429_image.png)


You can create ensemble models in Mendix building a separate microflow for each model, then combine the predictions in another microflow. The example shows an ensemble of two models.


Domain Model of an ensemble model:

![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673961108911_image.png)




![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673961121439_image.png)




1.2 Cascaded Inference

This pattern refers to the ability to feed the output of one model into another, in a cascade pattern. Normally it is used to compensate for a model bias, or incomplete data, in such a way you could use another predictor to compensate for that. In this case, a potential implementation looks pretty much like a graphical representation of this pattern:

![](/static/img/pixel.gif)


Example Microflow

![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673961162960_image.png)


We have a model pre-processor that makes some data available for the first model, which output is injected into the second model as an input. Ultimately, that output will be used for the final prediction.

1.3 Machine Learning MaaS (Model as a Service)

Another common pattern in machine learning deployment is use a microservice or a service. While Studio Pro excels at creating monolith applications with all its security and speed advantages, creating a microservice is possible by servers publishing a REST service and clients calling the service . In this way, the AI-powered smart app can be split into two Mendix apps: one to host the ML model, and one to process and use the predictions. This is a good approach for use cases where the ML model is complex and requires heavy computing power, or when the ML model is owned and maintained by another team. Another advantage is that you can update the ML model without the need for deploying the Mendix client app.

Below you can see an an example of such deployment. Instead of actually storing the variable after predicting the elements in an image, the variable could be encoded as JSON and then published.


![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673961187049_image.png)


1.4 Batch Inference

Another common pattern for ML applications is the ability to run multiple inferences with a single request for the model, or batch inference. This is just a special case of Dynamic Shapes (See 2.2.2), in which the first dimension is dynamic:

![Mapping of a ResNet50 with its first parameter dynamic](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674462624809_image.png)


You can add 1 as the first element and the model will work with a batch size of 1, or whatever figure you desire and work with n elements at time:

![ResNet50 with a batch size of 10](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674462710673_image.png)


Please remember to properly adjust your pre/post processor to send/receive the proper batch size.

