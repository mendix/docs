---
title: "Publishing a Microflow as REST Operation"
parent: "published-rest-services"
---

{{% alert type="info" %}}

This feature was introduced in version 7.15.0.

{{% /alert %}}

## 1 Introduction

To publish a microflow as a REST service operation, right-click anywhere in the whitespace of the microflow and select **Publish as REST service operation**.

Notice that if the microflow takes more than one parameter of an object or list type, it can't be published as a REST operation. If you try to publish it, there will be a consistency error.

## 2 Choosing a Resource

After you have clicked **Publish as REST service operation**, you will need to select a resource under which to publish the microflow. There are several options:

* If you already have a service and a resouce under which to publish the microflow, select it and click **Select**
* If you already have a service but you want to create a resource, select the service and click **New**
* If you want to create a new service, select a module or a folder and click **New**

The suggested name of the resource is the entity of a parameter of the microflow, or the entity result of the microflow.

## 3 Editing the Operation

After you have selected or created a service and a resource, you can edit the operation.

The suggested value for **Method** is **POST** when the microflow takes an object or list parameter. Otherwise, it is **GET**.
