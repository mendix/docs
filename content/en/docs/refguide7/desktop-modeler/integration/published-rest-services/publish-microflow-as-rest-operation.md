---
title: "Publish a Microflow as a REST Operation"
url: /refguide7/publish-microflow-as-rest-operation/
weight: 30
description: "How to publish a Microflow as a REST Operation"
tags: ["Microflow", "REST", "operation", "resource"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: edit microflow > (right-click) Publish as REST service operation > New > Help (integration)
---

{{% alert color="info" %}}

This feature was introduced in version 7.15.0.

{{% /alert %}}

## 1 Introduction

To publish a microflow as a REST service operation, right-click in the microflow editor and select **Publish as REST service operation**.

Notice that if the microflow takes more than one parameter of an object or list type, it cannot be published as a REST operation. If you try to publish it, there will be a consistency error.

## 2 Choosing a Resource

After you click **Publish as REST service operation**, you need to select a resource under which to publish the microflow. There are several options:

* If you already have a service and a resource under which to publish the microflow, select it and click **Select**
* If you already have a service but you want to create a resource, select the service and click **New**
* If you want to create a new service, select a module or folder and click **New**

The suggested name of the resource is the entity of a parameter of the microflow or the entity result of the microflow.

## 3 Editing the Operation

After you have selected or created a service and a resource, you can edit the operation.

The suggested value for **Method** is **POST** when the microflow takes an object or list parameter. Otherwise, it is **GET**.
