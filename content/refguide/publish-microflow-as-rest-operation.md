---
title: "Publish Microflow as REST Operation"
parent: "published-rest-services"
---

{{% alert type="info" %}}

The **publish a microflow as a REST operation** feature was introduced in version 7.15.0.

{{% /alert %}}

## 1 Introduction

To publish a microflow as a REST service operation, right-click anywhere in the whitespace of the microflow and select **Publish as REST service operation...**.

Notice that if the microflow takes more than one parameter of type Object or List, it can't be published as a REST operation. If you try to publish it, there will be a consistency error.

## 2 Choosing a resource

After you have clicked **Publish as REST service operation...**, you will need to select a resource under which to publish the microflow. There are several options:

* If you already have a service and a resouce under which to publish the microflow, choose it and click **Select**
* If you already have a service, but you want to create a resource, choose the service and click **New**
* If you want to create a new service, choose a module or a folder and click **New**

The suggested name of the resource is the entity of a parameter of the microflow, or the entity result of the microflow.

## 3 Editing the operation

After you have selected or created a service and a resource, you can edit the operation.

The suggested value for **Method** is **POST** when the microflow takes an Object or List parameter, and **GET** otherwise.